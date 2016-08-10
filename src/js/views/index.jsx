define([
  "components/header",
  "components/poke_filter"
], function(Header, Filter) {

  function render() {
    return (
      <div className="clearfix">
        <Header>
          <div className="float-right">
            <Filter />
          </div>
        </Header>
      </div>
    );
  }

  return React.createClass({render})

});
