define([
  "services/popups"
], function(Popups) {

  function ActionMenu(ButtonComponent, PopupComponent) {

    function componentWillUnmount() {
      Popups.close(this.state.popup);
    }

    function open(event) {
      let target    = event.currentTarget;
      let bounding  = target.getBoundingClientRect();
      let placement = {top: bounding.top + bounding.height, left: bounding.left};
      let popup = Popups.open(<PopupComponent />, placement);
      this.setState({popup});
    }

    function render() {
      return (
        <div className="action-menu clearfix display-inline-block">
          <div className="display-inline-block" onClick={this.open}><ButtonComponent /></div>
        </div>
      )
    }

    return React.createClass({render, open, componentWillUnmount});
  }

  return ActionMenu;

});
