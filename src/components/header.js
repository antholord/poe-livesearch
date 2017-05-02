/**
 * Created by Anthony Lord on 2017-04-16.
 */
import React from 'react';
import {DropdownButton, MenuItem} from "react-bootstrap";

/* <ul className="nav navbar-nav navbar-right">
 <li className="navLink"><a href="#">Options</a></li>
 <li className="navLink"><a href="#">About</a></li>
 </ul>*/

const Header = ({league, onLeagueChange}) => {

    return (
        <nav className="navbar customNav colored">
            <div className="container ">
                <a className="navbar-brand" href="http://poesearch.live/">Path of Exile Live Search</a>
                <DropdownButton onSelect={onLeagueChange} title={league} id="leagueDropdown" className="dropdown">
                    <MenuItem eventKey="Legacy">Legacy</MenuItem>
                    <MenuItem eventKey="Hardcore Legacy">Hardcore Legacy</MenuItem>
                </DropdownButton>
            </div>
        </nav>
    );
};
export default Header;

