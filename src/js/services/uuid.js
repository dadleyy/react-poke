define([
  "services/util"
], function(util) {

  let indx = 0;

  return function() {
    let next = util.pad(++indx, 4);
    return btoa(next);
  };

});
