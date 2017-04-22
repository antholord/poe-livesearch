/**
 * Created by Anthony Lord on 2017-04-16.
 */
import React from 'react';
import {DropdownButton, MenuItem} from "react-bootstrap";



const Header = ({league, onLeagueChange}) => {

    return (
        <div className="container-fluid main header">
            <div className="col-lg-12 " id="topBanner">

                <div className="row colored top-row">
                    <div className="col-lg-4 text-left inline">
                        <h1 className="inline title">
                            <a href="/"><b>Path of Exile Live Search</b></a>
                        </h1>
                    </div>
                    <h1>*STILL IN DEVELOPMENT*</h1>
                </div>
                <div className="row bot10">
                    <DropdownButton onSelect={onLeagueChange} title={league} id="leagueDropdown">
                        <MenuItem eventKey="Legacy">Legacy</MenuItem>
                        <MenuItem eventKey="Hardcore Legacy">Hardcore Legacy</MenuItem>
                    </DropdownButton>
                    <span className="f16">More search options to come later. Search is instantaneous because there's no indexing. You see items as the PoE API displays them</span>
                    <br />
                </div>
            </div>
        </div>
    );
};
export default Header;

