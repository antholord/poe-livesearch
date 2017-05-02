/**
 * Created by Anthony Lord on 2017-05-02.
 */
import React, { Component } from 'react';
import Header from "./header";
class About extends Component{
    render(){
        return (
        <div>
        <Header league={""} onLeagueChange={null}/>
            <div className="container main">
                <h3><p>This website is a small project inspired by github.com/ccbrown who made a simple indexer that listens to the PoE item river. The main issue was that any user using the app has to download the whole river (over 1mb/s of data)</p><br />
                <p>Instead, I made a backend api that listens to the river. The clients can thus subscribe to the API with a search request and only recieve the items that they searched for.</p><br />
                <p>Since there's no indexing, items should show up on here faster than other sites that process and index items before making them available.</p><br />
                <p>All of the code is open source so I recommend those interested to contribute. I used this project to learn new techs and I recommend other enthusiasts to do the same.</p><br />
                <p>I plan to add support to search for mods but not much else.</p>
                </h3>
                <h2>contact : antholord@hotmail.com</h2>
                <h2>Source code : <a href="https://github.com/antholord/poe-livesearch">Front end</a> | <a href="https://github.com/antholord/poe-livesearch-api">Back end</a></h2>

            </div>
        </div>
        );

    }
}

export default About;