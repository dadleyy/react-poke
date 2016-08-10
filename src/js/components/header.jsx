define([
], function() {

  function render() {
    return (
      <div className="clearfix bg-tomato header padding-tb-2">
        <div className="row position-relative">
          <div className="display-table display-table--fixed width-50">
            <div className="display-table-cell v-align-middle">
              <h1 className="ff-pixel fg-white">Pokedex</h1>
            </div>
            <div className="display-table-cell v-align-middle">
              <div className="clearfix float-right">{this.props.children}</div>
            </div>
          </div>
        </div>
      </div>
    )
  }

  return React.createClass({render});

});
