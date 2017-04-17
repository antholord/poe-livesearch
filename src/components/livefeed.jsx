import React from 'react';
import Websocket from 'react-websocket';
import ItemTable from './itemTable.js';
class ItemRow extends React.Component {
    render() {
        return (
            <tbody>
                <tr className="result-item">
                    <td><img src={this.props.item.icon}/></td>
                    <td>{this.props.item.name}</td>
                    <td>{this.props.item.typeLine}</td>
                    <td>{this.props.item.note}</td>
                </tr>
                <tr className="result-bottom">

                </tr>
            </tbody>
        );
    }
}
class LiveFeed extends React.Component {

  constructor(props) {
    super(props);
    this.state = {rows : [], msg : "test", league : "Legacy", type : "Ancient%20Reliquary%20Key"};
  }

    handleData(data) {
      let result;
      try{
          result = JSON.parse(data);
      } catch(e){
          console.log(e);
          console.log(data);
      }
        if (result){
            let item = {
                icon : result.Item.icon,
                name : result.Item.name,
                typeLine : result.Item.typeLine,
                note : result.Item.note
            };
            this.setState({
                rows: this.state.rows.concat([<ItemRow item={item} key={item.id}/>])
            });
        }
    }

    render() {
        return (
            <div>
              <Websocket url={'wss://poe-livesearch-api.herokuapp.com/ws/livesearch?league=' + this.state.league + '&type=' + this.state.type}
                         onMessage={this.handleData.bind(this)}/>
            <ItemTable rows={this.state.rows} key="1"/>
            </div>
        );
    }

}

export default LiveFeed;