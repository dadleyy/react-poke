define([
  "components/header",
  "components/poke_filter",
  "components/poke_list"
], function(Header, Filter, List) {

  function render() {
    let {delegate} = this.props.resolved || {};

    return (
      <div className="clearfix">
        <Header>
          <div className="float-right">
            <Filter delegate={delegate} />
          </div>
        </Header>
        <div className="padding-tb-50 clearfix row poke-list">
          <List classes="poke-list" delegate={delegate} />
        </div>
      </div>
    );
  }

  return React.createClass({render})

});
