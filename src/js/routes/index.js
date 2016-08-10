define([
], function() {

  function resolve() {
    let delegate = {};
    return Q.resolve({delegate});
  }

  let path = "/";
  let view = "views/index";

  return {resolve, view, path};

});
