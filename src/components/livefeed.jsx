import React from 'react';
import Websocket from 'react-websocket';
import queryString from "query-string";
import {Alert} from "react-bootstrap";
import ItemRow from "./itemRow";


class LiveFeed extends React.Component {

  constructor(props) {
    super(props);
    this.localRows = props.localRows;
    this.state = {rows : 0};
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
        //FOR DEBUGGING ONLY
        if (result/* && this.localRows.length < 5*/){
            result.Item.links = this.countLinks(result);
            this.localRows.unshift(<ItemRow item={result} key={this.localRows.length} index={this.localRows.length}/>)
            this.setState({
                rows: this.localRows.length
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
        /*let wsQuery;
        if (process.env.NODE_ENV!=="production"){
            wsQuery = 'ws://localhost:1337/ws/livesearch?' + queryString.stringify(this.props.form) + '&' + queryString.stringify({league : this.props.league});
        }else{
            wsQuery = 'wss://poe-livesearch-api.herokuapp.com/ws/livesearch?' + queryString.stringify(this.props.form) + '&' + queryString.stringify({league : this.props.league});
        }*/
        const wsQuery = 'wss://poe-livesearch-api.herokuapp.com/ws/livesearch?' + queryString.stringify(this.props.form) + '&' + queryString.stringify({league : this.props.league});

        return (
            <div>
              <Websocket url={wsQuery}
                         onMessage={this.handleData.bind(this)}/>
                <div className="container main top30">
                    {(this.localRows.length === 0) ? <h2 className="text-center">Listening...</h2> : null}
                    <ul className="col-md-12 list-unstyled">
                        {this.localRows}
                    </ul>
                </div>
            </div>
        );
    }

}

export default LiveFeed;