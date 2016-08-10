define([
], function() {

  const {API_HOME} = window.ENV;

  let get = {
    method: "GET",
    transform: {
      response(data) {
        let json       = JSON.parse(data);
        let departures = json.data;
        return departures;
      }
    }
  };

  return Flyby(`${API_HOME}/departures`, null, {get});

});
