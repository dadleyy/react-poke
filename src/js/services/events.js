define([
  "services/uuid"
], function(UUID) {

  class Engine {

    constructor() {
      this.$listeners = [];
    }

    on(event, handler, context) {
      if(typeof handler !== "function") return -1;
      let id = UUID();
      this.$listeners.push({id, handler, event, context});
      return id;
    }

    off(id) {
      let {$listeners: listeners} = this;

      for(let i = 0, c = listeners.length; i < c; i++) {
        let item = listeners[i];
        if(item.id !== id) continue;
        listeners.splice(i, 1);
        return id;
      }

      return -1;
    }

    trigger(event_name, ...args) {
      let {$listeners: listeners} = this;

      for(let i = 0, c = listeners.length; i < c; i++) {
        let item = listeners[i];
        if(item.event !== event_name) continue;
        let {handler, context} = item;
        handler.apply(context, args);
      }

      return true;
    }

  }

  return {Engine};

});
