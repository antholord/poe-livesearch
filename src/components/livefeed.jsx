import React from 'react';
import Websocket from 'react-websocket';
import queryString from "query-string";
import {Alert} from "react-bootstrap";
import ItemRow from "./itemRow";
let Infinite = require('react-infinite');


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
            this.localRows.unshift(<ItemRow item={result} key={this.state.rows} index={this.state.rows}/>);
            if (this.localRows.length >200){
                this.localRows.pop()
            }
            this.setState({
                rows: this.state.rows + 1
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
                        <strong>Error =====> </strong> Search parameters invalid, enter either a type, category or name
                    </Alert>
                </div>
            );
        }

        //const wsQuery = 'ws://localhost:1337/ws/livesearch?' + queryString.stringify(this.props.form) + '&' + queryString.stringify({league : this.props.league});
        const wsQuery = 'wss://poe-livesearch-api.herokuapp.com/ws/livesearch?' + queryString.stringify(this.props.form) + '&' + queryString.stringify({league : this.props.league});

        return (
            <div>
              <Websocket url={wsQuery}
                         onMessage={this.handleData.bind(this)}/>
                <div className="container main top30">
                    {(this.localRows.length === 0) ? <h2 className="text-center">Listening...</h2> : null}
                    <ul className="col-md-12 list-unstyled">
                        <Infinite containerHeight={1080} elementHeight={220} useWindowAsScrollContainer>
                        {this.localRows}
                        </Infinite>
                    </ul>
                </div>
            </div>
        );
    }

}

export default LiveFeed;