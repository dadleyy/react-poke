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
        <div className="clearfix poke-filter__menu">
          <div className="poke-filter__group-title poke-filter__group-title--first">
            <h6 className="fg-white">Type</h6>
          </div>
          <div className="poke-filter__filter-group">
            <a className="poke-filter__type-option">All</a>
            <a className="poke-filter__type-option">Bug</a>
            <a className="poke-filter__type-option">Fairy</a>
            <a className="poke-filter__type-option">Fire</a>
            <a className="poke-filter__type-option">Ghost</a>
          </div>
          <div className="poke-filter__group-title">
            <h6 className="fg-white">Level</h6>
          </div>
          <div className="poke-filter__filter-group poke-filter__filter-group--last">
          </div>
        </div>
      );
    }

  })

  return ActionMenu(FilterButton, FilterMenu);

});
