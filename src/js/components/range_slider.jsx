define([
], function() {

  function render() {
    let {max, min} = this.props;

    console.log(max);
    console.log(min);

    return (
      <div className="range-slider">
        <div className="range-slider__track">
        </div>
      </div>
    )
  }

  return React.createClass({render});

});
