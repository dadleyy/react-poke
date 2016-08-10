define([
], function() {

  function resolve() {
    return Q.resolve(true);
  }

  let path = "/";
  let view = "views/index";

  return {resolve, view, path};

});
