define([
  "services/poke_types",
  "services/events",
  "services/util",
  "resources/pokemon"
], function(TYPES, events, util, Pokemon) {

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

    items() {
      let {pokemon} = this;
      let items = [];

      for(let i = 0, count = pokemon.length; i < count; i++) {
        let poke = pokemon[i];
        items.push({poke});
      }

      return items;
    }

  }

  return PokeListDelegate;

});
