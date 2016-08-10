define([
], function() {

  function render() {
    return (
      <div className="clearfix bg-tomato header padding-tb-2">
        <div className="row">
          <div className="column large-6">
            <h1 className="ff-pixel fg-white">Pokedex</h1>
          </div>
        </div>
      </div>
    )
  }

  return React.createClass({render});

});
