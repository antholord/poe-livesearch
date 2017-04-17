import React from 'react';
import LiveFeed from "./livefeed";
import Header from "./header.js";
import Search from "./search";




class Container extends React.Component {
    render() {
        return (
            <div>
                <Header/>
                <Search/>
                <LiveFeed/>
            </div>
        );
    }
}

export default Container;