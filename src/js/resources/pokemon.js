define([
], function() {

  const {API_HOME} = window.ENV;

  let get = {
    method: "GET",
    transform: {
      response(data) {
        return [];
      }
    }
  };

  return Flyby(`${API_HOME}/pokemon`, null, {get});

});
