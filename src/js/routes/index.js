define([
], function() {

  function resolve(Pokemon) {
    let delegate = {};
    console.log(Pokemon);
    let {promise, resolve, reject} = Q.defer();
    console.log("loading");
    return promise;
  }

  resolve.$inject = [
    "resources/pokemon"
  ];

  let path = "/";
  let view = "views/index";

  return {resolve, view, path};

});
