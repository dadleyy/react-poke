define([
  "components/hoc/action_menu"
], function(ActionMenu) {

  let FilterButton = React.createClass({

    render() {
      return (
        <div className="clearfix poke-filter__button">
          <a className="white-outline-button position-relative">
            <i className="icon float-left margin-right-5"><img height="18px" className="float-left display-inline-block" src="/assets/img/icon-filter.png" /></i>
            <span className="overflow-hidden display-inline-block ff-sans fg-white upper">filter</span>
          </a>
        </div>
      );
    }

  });

  let FilterMenu = React.createClass({

    render() {
      return (
        <div className="clearfix poke-filter__menu padding-tb-5 padding-lr-8 bg-black-lighten-8">
        </div>
      );
    }

  })

  return ActionMenu(FilterButton, FilterMenu);

});
