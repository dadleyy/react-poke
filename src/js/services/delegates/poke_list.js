define([
  "services/util",
  "resources/pokemon"
], function(util, Pokemon) {

  class PokeListDelegate {

    constructor() {
      this.pokemon = [];
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
