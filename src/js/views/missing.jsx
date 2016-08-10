define([
  "components/header"
], function(Header) {


  function render() {
    return (
      <div className="clearfix">
        <Header />
        <div className="padding-tb-10">
          <div className="row">
            <h1 className="ff-pixel fs-5 fg-black-lighten-6 margin-bottom-5">Uh oh.</h1>
            <p className="fg-black-lighten-6">No pokemon here to catch! Head back to the <a href="/">main page</a> if you want to catch em' all!</p>
          </div>
        </div>
      </div>
    );
  }

  return React.createClass({render})

});
