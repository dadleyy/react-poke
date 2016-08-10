define([
  "services/viewport"
], function(Viewport) {

  function move(bound, slider) {
    return function handler() {
      let move_id, up_id;
      let {refs} = slider;

      function move(e) {
        let {clientX} = e;
        let bounding  = refs.track.getBoundingClientRect();
        let dist      = clientX - bounding.left;

        // guard against negative distances
        if(dist < 0) dist = 0;

        // guard against going overboard
        if(dist > bounding.width) dist = bounding.width;

        // calculate how far we've moved this bound. this is a percentage
        let position = dist / bounding.width;
        console.log(position);
      }

      function up() {
        Viewport.off(up_id);
        Viewport.off(move_id);
      }

      move_id = Viewport.on("mousemove", move);
      up_id   = Viewport.on("mouseup", up);
    }
  }

  function render() {
    let {max, min} = this.props;

    return (
      <div className="range-slider">
        <div className="range-slider__text">
        </div>
        <div ref="track" className="range-slider__track">
          <div onMouseDown={move("min", this)} className="range-slider__point" />
          <div onMouseDown={move("max", this)} className="range-slider__point" />
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

  return React.createClass({render});

});
