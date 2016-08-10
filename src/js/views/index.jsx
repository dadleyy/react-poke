define([
  "components/header",
  "components/poke_filter",
  "components/poke_list"
], function(Header, Filter, List) {

  function componentDidMount() {
    let {delegate} = this.props.resolved;
    let render = this.forceUpdate.bind(this);
    let listener_id = delegate.on("filtered", render);
    this.setState({listener_id});
  }

  function componentWillUnmount() {
    let {delegate} = this.props.resolved;
    let {listener_id} = this.state;
    delegate.off(listener_id);
  }

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

  return React.createClass({render, componentDidMount, componentWillUnmount})

});
