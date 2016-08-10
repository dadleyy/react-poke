require([
  "routes",
  "router",
  "services/popups",
  "services/notes"
], function(routes, router, Popups, Notes) {

  function e(id) {
    return document.getElementById(id);
  }

  Notes.mount(e("notes"));
  Popups.mount(e("popups"));

  router.init(routes);

});
