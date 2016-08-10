define([
], function() {


  function Factory(Transclusion) {
    let displayName = "list-view";

    function render() {
      let {delegate} = this.props;
      let items = delegate.items();
      let nodes = [];
      let count = items.length;

      for(let i = 0; i < count; i++) {
        let item = items[i];
        nodes.push(<Transclusion item={item} delegate={delegate} key={i} />);
      }

      return (
        <div className="list-view clearfix">{nodes}</div>
      );
    }

    return React.createClass({render, displayName});
  }

  return Factory;

});
