define([
  "components/header",
  "components/poke_filter"
], function(Header, Filter) {

  function render() {
    let {delegate} = this.props.resolved || {};

    return (
      <div className="clearfix">
        <Header>
          <div className="float-right">
            <Filter delegate={delegate} />
          </div>
        </Header>
      </div>
    );
  }

  return React.createClass({render})

});
