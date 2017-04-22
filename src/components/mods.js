/**
 * Created by Anthony Lord on 2017-04-21.
 */
import React from 'react';

function PrintMods(props) {
    const print = props.mod.map((i, index) => {
        return (
            <li key={index}>
                {i}
            </li>
        );
    });
    return <div>{print}</div>;

/*
    if (props.mod && props.mod.length > 0){
        {print}
    }else{
        return <div/>
    }


    return <span>WRONG</span>*/
}

const Mods = (props) => {

        return (
            <div>
                {props.item.implicitMods && props.item.implicitMods.length>0 ? (
                <ul className="list list-unstyled implicitModsList">
                    <PrintMods mod={props.item.implicitMods} key="implicit"/>
                    <div className="borderDiv"/>
                </ul>) : (null)}
                {props.item.explicitMods && props.item.explicitMods.length>0 ? (
                    <ul className="list list-unstyled">
                        <PrintMods mod={props.item.explicitMods} key="explicit"/>
                    </ul>) : (null)}
                {props.item.craftedMods && props.item.craftedMods.length>0 ? (
                    <ul className="list list-unstyled craftedModsList">
                        <PrintMods mod={props.item.craftedMods} key="crafted"/>
                    </ul>) : (null)}
            </div>
        );
};



export default Mods;