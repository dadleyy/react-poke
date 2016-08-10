define([
], function() {

  function render() {
    return (
      <div className="row padding-tb-20">
        <div className="columns large-4">
          <h6 className="fg-white-darken-2">Something went wrong</h6>
          <p className="fg-white-darken-10">Return <a href="/">home</a></p>
        </div>
      </div>
    )
  }

  return React.createClass({render});

});
