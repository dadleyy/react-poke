define([
  "components/hoc/list_view"
], function(ListView) {

  let MoveItem = React.createClass({

    render() {
      let {move} = this.props;

      return (
        <div className="clearfix display-table margin-bottom-6 display-table--fixed width-50">
          <div className="display-table-cell clearfix">
            <h6 className="fg-black-lighten-18 float-left">{move.name}</h6>
            <div className="float-right">
              <div className="poke-label" data-type={move.type} >
                <p>{move.type}</p>
              </div>
            </div>
          </div>
        </div>
      )
    }

  });

  let ListItem = React.createClass({

    render() {
      let {item, delegate} = this.props;
      let thumb_style = {
        "backgroundImage": `url(${item.poke.imageUrl})`
      };
      let {moves} = item.poke;
      let move_items = [];

      for(let i = 0, c = moves.length; i < c; i++) {
        move_items.push(<MoveItem move={moves[i]} key={moves[i].name} />);
      }

      return (
        <div className="clearfix poke-list__item">
          <div className="poke-list__item-inner">
            <div className="poke-list__item__image-level">
              <div className="poke-list__item__thumb" style={thumb_style}></div>
              <div className="poke-list__item__level">
                <h1 className="fg-white-darken-10"><sup><b>lvl</b></sup><b>{item.poke.level}</b></h1>
              </div>
            </div>
            <div className="poke-list__item__name-type">
              <h4><strong>{item.poke.name}</strong></h4>
              <div className="poke-list__item__type-label">
                <div className="poke-label" data-type={item.poke.type}>
                  <p>{item.poke.type}</p>
                </div>
              </div>
            </div>
            <div className="poke-list__item__description">
              <p><em className="fg-white-darken-20">{item.poke.description}</em></p>
            </div>
            <hr />
            <div className="poke-list__move-list">
              <h5 className="fg-black-lighten-5">Moves</h5>
              <div className="clearfix margin-top-8">{move_items}</div>
            </div>
          </div>
        </div>
      );
    }

  });

  return ListView(ListItem);

});
