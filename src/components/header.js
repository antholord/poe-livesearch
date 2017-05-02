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
                <a className="navbar-brand" href="/">Path of Exile Live Search</a>

                <DropdownButton onSelect={onLeagueChange} title={league} id="leagueDropdown" className="dropdown navbar-left">
                    <MenuItem eventKey="Legacy">Legacy</MenuItem>
                    <MenuItem eventKey="Hardcore Legacy">Hardcore Legacy</MenuItem>
                </DropdownButton>
                <h4 className="navbar-text">Alpha version</h4>
                <ul className="nav navbar-nav navbar-right">
                    <li className="navLink"><a href="/about">About</a></li>
                </ul>
            </div>
        </nav>
    );
};
export default Header;

