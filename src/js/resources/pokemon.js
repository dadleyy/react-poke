define([
], function() {

  /* the pokemon resource
   *
   * This is an instance of a Flyby resource. It defines an interface that allows
   * users to communicate w/ the api in an intuitive fashion. For more information
   * on the flyby library, please see: https://github.com/dadleyy/flyby
   */

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
