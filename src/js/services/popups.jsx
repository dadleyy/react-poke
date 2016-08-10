define([
  "services/uuid"
], function(UUID) {

  let root = null;
  let open_popups = [];

  function px(amt) {
    return `${amt}px`;
  }

  function create(placement) {
    let div = document.createElement("div");
    div.style.position = "fixed";
    div.style.top = px(placement.top);
    div.style.left = px(placement.left);
    return div;
  }

  function open(component, placement) {
    let id = UUID();
    let popup = create(placement);
    ReactDOM.render(component, popup);
    root.appendChild(popup);
    open_popups.push({id, popup});
    return id;
  }

  function close(popup_id) {
    let count = open_popups.length;

    for(let i = 0; i < count; i++) {
      let p = open_popups[i];
      if(p.id !== popup_id) continue;
      let node = ReactDOM.findDOMNode(p.popup)
      ReactDOM.unmountComponentAtNode(node);
      return popup_id;
    }

    return -1;
  }

  function mount(target) {
    root = target;
  }

  return {open, close, mount};

});
