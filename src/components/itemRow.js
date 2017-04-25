/**
 * Created by Anthony Lord on 2017-04-21.
 */
import React from 'react';
import CopyToClipboard from 'react-copy-to-clipboard';
import {Panel} from "react-bootstrap";
import Mods from './mods'
import Image from "./image";



class ItemRow extends React.Component {
    constructor(props){
        super(props);
        this.state = { copied : false};
        this.displayRequirements = this.displayRequirements.bind(this);
        this.displayLinks = this.displayLinks.bind(this);
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


    render() {
        const r = this.props.item;
        console.log(this.props.index);
        const msg = '@' + r.lastCharacterName + ' Hi, I would like to purchase ' + r.Item.name + ' ' + r.Item.typeLine + ' listed for ' + r.Item.note + ' in tab ' + r.stash;
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
                        <div className="col-md-6">
                            <Mods item={r.Item}/>
                        </div>
                        <div className="col-md-5">
                        <table>
                            <thead>
                            <tr>
                                <th>Sockets</th>
                            </tr>
                            </thead>
                            <tbody className="text-center">
                            <tr>
                                <td>{r.Item.sockets.length}s {' '} <span>{this.displayLinks()}</span></td>
                            </tr>
                            </tbody>
                        </table>
                        </div>
                        </div>
                        <div className="media-right">

                        </div>
                    </div>
                    <div className="media-bottom flexBottom">
                        <span>Name : {r.lastCharacterName}</span><span>  Account : {r.accountName}</span>
                        <span className=""> Note : {r.Item.note}</span>
                        <br/>
                        <CopyToClipboard text={msg} /*onCopy={() => this.setState({copied: true})}*/>
                            <button type='text' className="btnToLink media-bottom pull-right media-right"> ~Message seller~ </button>
                        </CopyToClipboard>
                        <CopyToClipboard text={JSON.stringify(r)} /*onCopy={() => this.setState({copied: true})}*/>
                            <button type='text' className="btnToLink media-bottom"> debug </button>
                        </CopyToClipboard>
                    </div>

                </Panel>
            </li>

        );
    }
}

export default ItemRow;