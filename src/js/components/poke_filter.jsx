define([
  "services/poke_types",
  "components/hoc/action_menu",
  "components/range_slider"
], function(TYPES, ActionMenu, RangeSlider) {

  function ucFirst(str) {
    let [first, second] = [str.substr(0,1), str.substr(1)];
    return [first.toUpperCase(), second.toLowerCase()].join("");
  }

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

    select(e) {
      let {type, delegate} = this.props;
      delegate.toggleType(type.key);
      e.preventDefault();
      return false;
    },

    render() {
      let {delegate, type} = this.props;
      let {type_filters} = delegate;
      let selected = type_filters.indexOf(type.key) !== -1;
      let button_class = "rounded-button";

      if(selected)
        button_class = [button_class, "rounded-button--active"].join(" ");

      return (
        <div className="poke-filter__type-option" key={type.key}>
          <a onClick={this.select} className={button_class}>{ucFirst(type.name)}</a>
        </div>
      );
    }

  });

  let FilterMenu = React.createClass({

    updateRange() {
    },

    componentWillUnmount() {
      let {delegate} = this.props;
      let {listener_id} = this.state;
      delegate.off(listener_id);
    },

    componentDidMount() {
      let {delegate} = this.props;
      let render = this.forceUpdate.bind(this);
      let listener_id = delegate.on("filtered", render);
      this.setState({listener_id});
    },

    render() {
      let {delegate} = this.props;
      let all = {name: "All", key: -1};

      // special filter type - all
      let type_options = [<TypeFilter delegate={delegate} type={all} key={-1} />];

      for(let name in TYPES) {
        let key = TYPES[name]
        let type = {name, key};
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
