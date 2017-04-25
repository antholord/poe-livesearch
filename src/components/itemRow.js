/**
 * Created by Anthony Lord on 2017-04-21.
 */
import React from 'react';
import CopyToClipboard from 'react-copy-to-clipboard';
import {Panel} from "react-bootstrap";
import Mods from './mods'
import Image from "./image";
import _ from 'lodash';



class ItemRow extends React.Component {
    constructor(props){
        super(props);
        this.state = { copied : false};
        this.displayRequirements = this.displayRequirements.bind(this);
        this.displayLinks = this.displayLinks.bind(this);
        this.buildMessage = this.buildMessage.bind(this);
        this.findProp = this.findProp.bind(this);
    }
    displayRequirements(){
        if (!this.props.item.Item.requirements){
            return null;
        }
        return (
            <div className="smallInfo flexBottom"><span>ilvl : {this.props.item.Item.ilvl}</span>
                {(this.props.item.Item.requirements[0] && this.props.item.Item.requirements[0].name === "Level") ? <span>Req : Lvl {this.props.item.Item.requirements[0].values[0][0]}</span> : null}
                {(this.props.item.Item.requirements[1] && this.props.item.Item.requirements[1].name) ? <span>{this.props.item.Item.requirements[1].name}{' : '}{this.props.item.Item.requirements[1].values[0][0]}</span> : null}
                {(this.props.item.Item.requirements[2] && this.props.item.Item.requirements[2].name) ? <span>{this.props.item.Item.requirements[2].name}{' : '}{this.props.item.Item.requirements[2].values[0][0]}</span> : null}
                {(this.props.item.Item.requirements[3] && this.props.item.Item.requirements[3].name) ? <span>{this.props.item.Item.requirements[3].name}{' : '}{this.props.item.Item.requirements[3].values[0][0]}</span> : null}
                <span>{(!this.props.item.Item.identified) ? 'Unidentified' : null}</span>
            </div>
        );
    }
    displayLinks() {
        let s = '';
        if (this.props.item.Item.links) {
            Object.values(this.props.item.Item.links).map((item) => {
                s += (item>1) ? item + 'L  ' : '';
            })
        }
        return s
    }
    buildMessage() {
        const r = this.props.item;
        let s= '@' + r.lastCharacterName + ' Hi, I would like to purchase ' + r.Item.name + ' ' + r.Item.typeLine;
        if (r.Item.note.length>0){
            if (r.Item.note.substring(0,6) === "~price"){
                s+= ' listed for ' + r.Item.note.substring(6,r.Item.note.length);
            }else if (r.Item.note.substring(0,4) === "~b/o"){
                s+= ' listed for ' + r.Item.note.substring(4,r.Item.note.length);
            }
        }
        s+=' in tab "' + r.stash + '"';
        return s;
    }
    findProp(s) {
        let f = _.find(this.props.item.Item.properties, {name : s});
        if (!f) return null;
        let r='';
        for (let i = 0;i<f.values.length;i++){
            if (f.values[i][0]){
                r+= f.values[i][0];
            }
        }

        return r;
    }


    render() {
        const r = this.props.item;
         return (
            <li className="media container-fluid">
                <Panel className="itemPanel">

                    <div className="media-left">
                        <Image key={this.props.index+'-img'} item={r} index={this.props.index+'-img'}/>
                    </div>
                    <div className="media-body">
                        <div className="media-top">
                            <div className="media-heading"><span className={"item itemframe" + r.Item.frameType}><h5 className={"item itemframe" + r.Item.frameType}>{r.Item.name}</h5></span>   <h6>{'   ' + r.Item.typeLine}</h6><span className="corrupted">{(r.Item.corrupted) ? 'Corrupted' : null}</span></div>
                            {this.displayRequirements()}
                        </div>
                        <div className="media-middle">
                        <div className="">
                            <Mods item={r.Item}/>
                        </div>
                        </div>
                    </div>
                    <div className="media-body">
                        <table className="table table-condensed row">
                            <thead>
                            <tr className="center text-center">

                                <th className="text-center">Armour</th>
                                <th className="text-center">Evasion</th>
                                <th className="text-center">Shield</th>
                                <th className="text-center">Block</th>
                                <th className="text-center">Crit</th>
                                <th className="text-center">Qual</th>

                            </tr>
                            </thead>
                            <tbody className="text-center">
                            <tr>
                                <td>{this.findProp("Armour")}</td>
                                <td>{this.findProp("Evasion")}</td>
                                <td>{this.findProp("Energy Shield")}</td>
                                <td>{this.findProp("Block")}</td>
                                <td>{this.findProp("Critical Strike Chance")}</td>
                                <td>{this.findProp("Quality")}</td>
                            </tr>

                            </tbody>
                        </table>
                        <table className="table table-condensed row">
                            <thead>
                            <tr className="center text-center">

                                <th className="text-center">pDPS</th>
                                <th className="text-center">eDPS</th>
                                <th className="text-center">DPS</th>
                                <th className="text-center">APS</th>
                                <th className="text-center">Range</th>

                            </tr>
                            </thead>
                            <tbody className="text-center">
                            <tr>
                                <td>{this.findProp("Physical Damage") * this.findProp("Attacks per Second")}</td>
                                <td>{this.findProp("Elemental Damage") * this.findProp("Attacks per Second")}</td>
                                <td>{this.findProp("Energy Shield")}</td>
                                <td>{this.findProp("Block")}</td>
                                <td>{this.findProp("Critical Strike Chance")}</td>

                            </tr>

                            </tbody>
                        </table>
                        </div>
                        <div className="media-right">

                        </div>

                    <div className="media-bottom flexBottom">
                        <span>Name : {r.lastCharacterName}</span><span>  Account : {r.accountName}</span>
                        <span className=""> Note : {r.Item.note}</span>
                        <br/>
                        <CopyToClipboard text={this.buildMessage()}>
                            <button type='text' className="btnToLink media-bottom pull-right media-right"> ~Message seller~ </button>
                        </CopyToClipboard>
                        <CopyToClipboard text={JSON.stringify(r)}>
                            <button type='text' className="btnToLink media-bottom"> debug </button>
                        </CopyToClipboard>
                    </div>

                </Panel>
            </li>

        );
    }
}

export default ItemRow;