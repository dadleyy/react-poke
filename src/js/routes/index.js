define([
], function() {

  function resolve(ListDelegate) {
    let delegate = new ListDelegate();

    function finish() {
      return Q.resolve({delegate});
    }

    return delegate.load()
      .then(finish);
  }

  resolve.$inject = [
    "services/delegates/poke_list"
  ];

  let path = "/";
  let view = "views/index";

  return {resolve, view, path};

});
