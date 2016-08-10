define([
], function() {

  const {API_HOME} = window.ENV;

  let get = {
    method: "GET",
    transform: {
      response(data) {
        let pokemon = []

        try {
          let json = JSON.parse(data);
          pokemon = json.pokemon;
        } catch(e) {
          console.error(e);
          return [];
        }

        return pokemon;
      }
    }
  };

  return Flyby(`${API_HOME}/pokemon`, null, {get});

});
