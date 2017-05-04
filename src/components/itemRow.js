/**
 * Created by Anthony Lord on 2017-04-21.
 */
import React from 'react';
import CopyToClipboard from 'react-copy-to-clipboard';
import Mods from './mods'
import Image from "./image";

class ItemRow extends React.Component {

    constructor(props){
        super(props);
        this.state = { copied : false};
        this.displayRequirements = this.displayRequirements.bind(this);
        this.displayLinks = this.displayLinks.bind(this);
        this.buildMessage = this.buildMessage.bind(this);
        this.findProp = this.findProp.bind(this);

        this.armour = this.findProp("Armour");
        this.evasion = this.findProp("Evasion Rating");
        this.es = this.findProp("Energy Shield");
        this.block = this.findProp("Block");
        this.crit = this.findProp("Critical Strike Chance");
        this.quality = this.findProp("Quality");

        this.aps = Number(this.findProp("Attacks per Second"));
        this.phys = this.findProp("Physical Damage");
        this.ele = this.findProp("Elemental Damage");
        this.chaos = this.findProp("Chaos Damage");
        this.cdps = (this.chaos) ? Math.round(this.chaos * this.aps) : '';
        this.pdps = (this.phys) ? Math.round(this.phys * this.aps) : '';
        this.edps = (this.ele) ? Math.round(this.ele * this.aps) : '';
        this.dps = ((this.phys) ? this.pdps : 0) + ((this.ele) ? this.edps : 0) + ((this.chaos) ? this.cdps : 0);

    }
    displayRequirements(){
        if (!this.props.item.Item.requirements){
            return (
                <div className="smallInfo flexBottom">
                    <span>ilvl : {this.props.item.Item.ilvl}</span>
                </div>
            );
        }
        return (
            <div className="smallInfo flexBottom">

                <span>ilvl : {this.props.item.Item.ilvl}</span>
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
        let s= '@' + r.lastCharacterName + ' Hi, I would like to purchase your ' + ((r.Item.stackSize>1) ? r.Item.stackSize : '') + r.Item.name + ' ' + r.Item.typeLine;
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
        if (!this.props.item.Item.properties) return null;
        let f = this.props.item.Item.properties.find(function(o) {return o.name === s;});
        if (!f) return null;
        let r=0;
        if (s.includes("Damage")){
            for (let i = 0;i<f.values.length;i++){
                let arr = f.values[i][0].split("-");
                if (arr.length>0){
                    r+= ((Number(arr[0]) + Number(arr[1])) / 2);
                }
            }
        }else{
            return f.values[0][0];
        }
        return r;
    }
    render() {
        const r = this.props.item;
        const cp = this.props.item.Item.customProperties;
         return (
            <li className="media container-fluid">
                <div className="panel itemPanel panel-default">
                    <div className="panel-body">
                    <div className="media-left">
                        <Image key={this.props.index+'-img'} item={r} index={this.props.index+'-img'}/>
                        {(r.Item.stackSize) ? '# : ' + r.Item.stackSize : null}
                    </div>
                    <div className="media-body">
                        <div className="media-top">
                            <div className="media-heading">
                                <span className={"item itemframe" + r.Item.frameType}>
                                    <h5 className={"item itemframe" + r.Item.frameType}>
                                        {r.Item.name}
                                    </h5>
                                </span>
                                <h6>
                                    {'   ' + r.Item.typeLine}
                                </h6>
                                <span className="corrupted">
                                    {(r.Item.corrupted) ? 'Corrupted' : null}
                                    </span>
                            </div>


                                 {this.displayRequirements()}

                        </div>
                        <div className="media-middle">
                            <div className="">
                                <Mods item={r.Item}/>
                            </div>
                        </div>
                    </div>
                    <div className="media-body tableBody">
                        <table className="table table-condensed">
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
                                <td>{cp.armour}</td>
                                <td>{cp.evasion}</td>
                                <td>{cp.es}</td>
                                <td>{cp.block}</td>
                                <td>{cp.crit}</td>
                                <td>{cp.quality}</td>
                            </tr>

                            </tbody>
                        </table>
                        <table className="table table-condensed">
                            <thead>
                            <tr className="center text-center">

                                <th className="text-center">pDPS</th>
                                <th className="text-center">eDPS</th>
                                <th className="text-center">DPS</th>
                                <th className="text-center">APS</th>
                                <th className="text-center">Phys</th>
                                <th className="text-center">Ele</th>

                            </tr>
                            </thead>
                            <tbody className="text-center">
                            <tr>
                                <td>{cp.pdps}</td>
                                <td>{cp.edps}</td>
                                <td>{cp.dps}</td>
                                <td>{cp.aps}</td>
                                <td>{cp.phys}</td>
                                <td>{cp.ele}</td>
                            </tr>

                            </tbody>
                        </table>
                        </div>
                        <div className="media-right">

                        </div>

                    <div className="media-bottom flexBottom col-md-12 top10">
                        <div className="col-md-9">
                            <span>Name : {r.lastCharacterName}</span><span>  Account : {r.accountName}</span>
                            <span className=""> Note : {r.Item.note}</span>
                        </div>
                        <div className="col-md-3">
                            <CopyToClipboard text={this.buildMessage()}>
                                <button type='text' className="btnToLink media-bottom pull-right media-right"> ~Message seller~ </button>
                            </CopyToClipboard>
                            <CopyToClipboard text={JSON.stringify(r)}>
                                <button type='text' className="btnToLink media-bottom media-right pull-right"> d </button>
                            </CopyToClipboard>
                        </div>
                    </div>
                    </div>
                </div>
            </li>

        );
    }
}

export default ItemRow;