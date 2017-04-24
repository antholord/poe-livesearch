import React from 'react';
import Websocket from 'react-websocket';
import ItemTable from './itemTable.js';
import queryString from "query-string";
import {Alert} from "react-bootstrap";

class LiveFeed extends React.Component {

  constructor(props) {
    super(props);
    this.state = {rows : []};
    this.countLinks = this.countLinks.bind(this);
  }
    countLinks(stashItem) {
        let a;
        if (stashItem.Item.sockets){
            a = stashItem.Item.sockets.reduce(function (agg, curr) {
                agg[curr.group] ? agg[curr.group]++ : agg[curr.group] = 1;
                return agg
            }, {})
        }else {
            return null;
        }
        return a;
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
            result.Item.links = this.countLinks(result);

            this.setState({
                rows: this.state.rows.concat(result)
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
        return (
            <div>
              <Websocket url={wsQuery}
                         onMessage={this.handleData.bind(this)}/>
            <ItemTable rows={this.state.rows} key={wsQuery}/>
            </div>
        );
    }

}

export default LiveFeed;