define([
  "services/viewport"
], function(Viewport) {

  function moveMin() {
    function move() {
      console.log("move");
    }


    function up() {
      console.log("up");
      Viewport.off(up_id);
      Viewport.off(move_id);
    }

    let move_id = Viewport.on("mousemove", move);
    let up_id   = Viewport.on("mouseup", up);
  }

  function moveMax() {
  }

  function render() {
    let {max, min} = this.props;

    return (
      <div className="range-slider">
        <div className="range-slider__text">
        </div>
        <div className="range-slider__track">
          <div onMouseDown={this.moveMin} className="range-slider__point" />
          <div onMouseDown={this.moveMax} className="range-slider__point" />
        </div>
        <div className="clearfix margin-top-4">
          <div className="range-slider__label range-slider__label--min">
            <p className="ff-sans">{min}</p>
          </div>
          <div className="range-slider__label range-slider__label--max">
            <p className="ff-sans">{max}</p>
          </div>
        </div>
      </div>
    )
  }

  return React.createClass({render, moveMin, moveMax});

});
