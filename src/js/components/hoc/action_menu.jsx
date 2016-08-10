define([
], function() {

  function ActionMenu(ButtonComponent, PopupComponent) {

    function render() {
      return (
        <div className="action-menu clearfix display-inline-block">
          <ButtonComponent />
        </div>
      )
    }

    return React.createClass({render});

  }

  return ActionMenu;

});
