define([
  "services/poke_types",
  "services/events",
  "services/util",
  "resources/pokemon"
], function(TYPES, events, util, Pokemon) {

  /* poke list delegate
   *
   * In order to communicate between components (particularly the filters 
   * and the list), this delegate is created during route resolution and
   * resolved into the view, which then sends it along to the filter and 
   * the composed list component (which then sends it along to the action 
   * menu and subsequently the filter menu itself).
   *
   * In this way, even through a non-linear component hierarchy the relevant
   * components are able to communicate w/ one another.
   */

  const ALL_FILTER_KEY = -1;

  class PokeListDelegate extends events.Engine {

    constructor() {
      super();
      this.pokemon = [];
      this.type_filters = [-1];
    }

    toggleType(type_id) {
      let {type_filters} = this;
      let index = type_filters.indexOf(type_id);

      // special case: adding the "all" fitler - clear out existing filters
      if(index === -1 && type_id === ALL_FILTER_KEY) {
        type_filters.length = 0;
        type_filters.push(type_id);
        this.trigger("filtered");
        return;
      }

      // do not allow user to remove "all" unless others are selected
      if(type_id === ALL_FILTER_KEY && type_filters.length === 1) {
        console.log("cannot remove all");
        return;
      }

      // based on the presence of this item, either add it or remove it
      if(index === -1) {
        type_filters.push(type_id);
      } else {
        type_filters.splice(index, 1);
      }

      // get the index of the all fitler - if it is present
      let all_index = type_filters.indexOf(ALL_FILTER_KEY);

      // if the all filter is present, remove it
      if(all_index !== -1)
        type_filters.splice(all_index, 1);


      this.trigger("filtered");

      return true;
    }

    load() {
      let {pokemon} = this;
      let {promise, resolve, reject} = Q.defer();

      Pokemon.get(null, function(err, results) {
        if(err) {
          console.error(err);
          return reject(500);
        }

        util.replace(pokemon, results);
        resolve(results);
      });

      return promise;
    }

    /* items
     *
     * This function is used by the list_view high-order component so that it need not
     * concern itself with any filtering, and this delegate need not concern itself with
     * maintaining an "active data set" every time a filter is applied. Instead, any time
     * the list view is rendered, it asks the delegate for it's current set - a value that
     * is computed based on it's current state.
     */
    items() {
      let {pokemon, type_filters} = this;
      let items = [];

      let selecting_all  = type_filters.length === 1 && type_filters[0] === ALL_FILTER_KEY;
      let selected_types = type_filters.map(function(id) {
        for(let name in TYPES) {
          if(TYPES[name] === id) return name.toLowerCase();
        }
      });

      function matchesType(poke) {
        let {type} = poke;
        return selected_types.indexOf(type.toLowerCase()) !== -1;
      }

      let filtered = selecting_all ? pokemon : pokemon.filter(matchesType);

      for(let i = 0, count = filtered.length; i < count; i++) {
        let poke = filtered[i];
        items.push({poke});
      }

      return items;
    }

  }

  return PokeListDelegate;

});
