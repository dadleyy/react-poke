define([
  "components/hoc/action_menu",
  "components/range_slider"
], function(ActionMenu, RangeSlider) {

  const TYPE_FILTERS = [
    {name: "All",     key: 1},
    {name: "Bug",     key: 2},
    {name: "Fire",    key: 3},
    {name: "Fairy",   key: 4},
    {name: "Ghost",   key: 5},
    {name: "Psychic", key: 6},
    {name: "Water",   key: 7}
  ];

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

  let TypeFilter = React.createClass({

    select() {
      let {type, delegate} = this.props;
      console.log(type.key);
    },

    render() {
      let {type} = this.props;

      return (
        <div className="poke-filter__type-option" key={type.key}>
          <a onClick={this.select} className="rounded-button rounded-button-active">{type.name}</a>
        </div>
      );
    }

  });

  let FilterMenu = React.createClass({

    updateRange() {
      console.log("whoa");
    },

    render() {
      let {delegate} = this.props;
      let type_options = [];

      for(let i = 0, c = TYPE_FILTERS.length; i < c; i++) {
        let type = TYPE_FILTERS[i];
        type_options.push(<TypeFilter delegate={delegate} type={type} key={type.key} />);
      }

      return (
        <div className="clearfix poke-filter__menu">
          <div className="poke-filter__group-title poke-filter__group-title--first">
            <h6 className="fg-white">Type</h6>
          </div>
          <div className="poke-filter__filter-group clearfix">{type_options}</div>
          <div className="poke-filter__group-title">
            <h6 className="fg-white">Level</h6>
          </div>
          <div className="poke-filter__filter-group poke-filter__filter-group--last">
            <RangeSlider max={100} min={0} onChange={this.updateRange} />
          </div>
        </div>
      );
    }

  })

  return ActionMenu(FilterButton, FilterMenu);

});
