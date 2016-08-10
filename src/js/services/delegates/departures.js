define([
  "services/util",
  "resources/departure"
], function(util, Departure) {

  function replace(a1, a2) {
  }

  class Departures {

    constructor() {
      this.departures = [];
    }

    load() {
      let {departures} = this;
      let deferred = Q.defer();

      Departure.get(null, function(err, results) {
        util.replace(departures, results);
        deferred.resolve(results);
      });

      return deferred.promise;
    }

    items() {
      let {departures} = this;
      let items = [];
      let count = departures.length;

      for(let i = 0; i < count; i++) {
        let departure = departures[i];
        let key       = departure.name;
        items.push({departure});
      }

      return items;
    }

  }

  return Departures;

});
