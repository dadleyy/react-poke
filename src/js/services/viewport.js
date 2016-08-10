define([
  "services/uuid"
], function(UUID) {

  let listeners = [];
  let bound = false;

  function on(event_name, handler) {
    var id = UUID();
    listeners.push({event_name, id, handler});
    return id;
  }

  function off(id) {
    let count = listeners.length;

    for(let i = 0; i < count; i++) {
      let l = listeners[i];
      if(l.id !== id) continue;
      listeners.splice(i, 1);
      return id;
    }

    return -1;
  }

  function trigger(event) {
    return function handler(e) {
      let count = listeners.length;
      for(let i = 0; i < count; i++) {
        let l = listeners[i];
        if(l.event_name !== event) continue;
        l.handler(e);
      }
      return true;
    };
  }

  function bind() {
    if(bound) { return false; }
    bound = true;

    document.addEventListener("click", trigger("click"));
    document.addEventListener("mousedown", trigger("mousedown"));
    document.addEventListener("mousemove", trigger("mousemove"));
    document.addEventListener("mouseup", trigger("mouseup"));
  }

  return {on, off, bind};

});
