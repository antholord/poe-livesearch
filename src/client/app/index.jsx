import React from 'react';
import {render} from 'react-dom';
import LiveFeed from './livefeed.jsx';

class App extends React.Component {
  render () {
    return (
      <div>
        <p> Path of Exile Live Search</p>
        <LiveFeed />
      </div>
    );
  }
}

render(<App/>, document.getElementById('app'));