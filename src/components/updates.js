/**
 * Created by Anthony Lord on 2017-05-02.
 */
import React, { Component } from 'react';
import Header from "./header";
class Updates extends Component{
    render(){
        return (
        <div>
        <Header league={""} onLeagueChange={null}/>
            <div className="container main">
                <h3>v1.1</h3>
                <ul className="">
                    <li className=""><h4>Removed categories until they are fixed</h4></li>
                    <li className=""><h4>Enabled blue item search. You can type the name of the item like : 'ample beyond leaguestone of the call'</h4><h4>You can also select the Beyond Leaguestone Type/Base, and simply type 'ample' as the name, to indicate that you are searching for this mod.</h4><h4>You can also search for multiple mods at once by concatenating them in the name bar.</h4></li>
                </ul>
                <h3>contact : antholord@hotmail.com</h3>
                <h3>Source code : <a href="https://github.com/antholord/poe-livesearch">Front end</a> | <a href="https://github.com/antholord/poe-livesearch-api">Back end</a></h3>

            </div>
        </div>
        );

    }
}

export default Updates;