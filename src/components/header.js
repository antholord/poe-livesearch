/**
 * Created by Anthony Lord on 2017-04-16.
 */
import React from 'react';
import LiveFeed from "./livefeed";





class Header extends React.Component {
    render() {
        return (
            <div className="container-fluid main header">
                <div className="col-lg-12 " id="topBanner">

                    <div className="row colored top-row">
                        <div className="col-lg-4 text-left inline">
                            <h1 className="inline title">
                                <a href="/">
                                    <b>Path of Exile Live Search</b>
                                </a>

                            </h1>

                        </div>
                        <h1>*STILL IN DEVELOPMENT*</h1>
                    </div>
                    <div className="row bot10">

                    </div>
                </div>
            </div>
        );
    }
}

export default Header;