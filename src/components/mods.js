/**
 * Created by Anthony Lord on 2017-04-21.
 */
import React from 'react';

class Mods extends React.Component{
    constructor(props){
        super(props);

    }

    printMods(mod) {
        if (mod && mod.length > 0){
            mod.map((i, index) => {
                return (
                    <li>
                        {i}
                    </li>
                );
            });
        }else{
            return <div/>;
        }

    };
    render() {
        return (
            <div>
                <div>
                    <ul className="list list-unstyled implicitModsList">
                        {this.printMods(this.props.item.implicitMods)}
                    </ul>
                </div>
                <div>
                <ul className="list list-unstyled">
                    {this.printMods(this.props.item.explicitMods)}
                </ul>
                </div>
            </div>
        );
    }


}



export default Mods;