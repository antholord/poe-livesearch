import React from 'react';
import Websocket from 'react-websocket';
import ItemTable from './itemTable.js';
import queryString from "query-string";
import {Alert} from "react-bootstrap";
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
    this.state = {rows : []};
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
        if (!this.props.form){
            return null;
        }
        else if (this.props.form.error){
            return (
                <div className="container main top30">
                    <Alert bsStyle="warning">
                        <strong>Error =====> </strong> Search parameters invalid, enter either a name or a type
                    </Alert>
                </div>
            );
        }
        const wsQuery = 'wss://poe-livesearch-api.herokuapp.com/ws/livesearch?' + queryString.stringify(this.props.form) + '&' + queryString.stringify({league : this.props.league});
        console.log(wsQuery);
        return (
            <div>
              <Websocket url={wsQuery}
                         onMessage={this.handleData.bind(this)}/>
            <ItemTable rows={this.state.rows} key="1"/>
            </div>
        );
    }

}

export default LiveFeed;