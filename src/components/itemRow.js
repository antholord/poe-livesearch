/**
 * Created by Anthony Lord on 2017-04-21.
 */
import React from 'react';
import CopyToClipboard from 'react-copy-to-clipboard';
import {Panel} from "react-bootstrap";
import Mods from './mods'



class ItemRow extends React.Component {
    constructor(props){
        super(props);
        this.state = { copied : false};
    }

    countLinks() {
        if (this.props.item.Item.sockets){
            this.props.item.Item.sockets.map((socket) => {

            })
        }else {
            return null;
        }

    }
    render() {
        const r = this.props.item;
        const msg = '@' + r.lastCharacterName + ' Hi, I would like to purchase ' + r.Item.name + ' ' + r.Item.typeLine + ' listed for ' + r.Item.note + ' in tab ' + r.stash;
        return (
            <li className="media container-fluid">
                <Panel className="itemPanel">

                    <div className="media-left"><img src={r.Item.icon}/></div>
                    <div className="media-body">
                        <div className="media-top">
                            <div className="media-heading"><h5>{r.Item.name}</h5>   <h6>{'   ' + r.Item.typeLine}</h6><span className="corrupted">{(r.Item.corrupted) ? 'Corrupted' : null}</span></div>
                            <div className="smallInfo flexBottom"><span>ilvl : {r.Item.ilvl}</span>
                                {(r.Item.requirements[0] && r.Item.requirements[0].name === "Level") ? <span>Req : Lvl {r.Item.requirements[0].values[0][0]}</span> : null}
                                {(r.Item.requirements[1] && r.Item.requirements[1].name) ? <span>{r.Item.requirements[1].name}{' : '}{r.Item.requirements[1].values[0][0]}</span> : null}
                                {(r.Item.requirements[2] && r.Item.requirements[2].name) ? <span>{r.Item.requirements[2].name}{' : '}{r.Item.requirements[2].values[0][0]}</span> : null}
                                {(r.Item.requirements[3] && r.Item.requirements[3].name) ? <span>{r.Item.requirements[3].name}{' : '}{r.Item.requirements[3].values[0][0]}</span> : null}
                                <span>{(!r.Item.identified) ? 'Unidentified' : null}</span>
                            </div>
                        </div>
                        <div className="media-middle">
                        <div className="col-md-5">
                            <Mods item={r.Item}/>
                        </div>
                        <div className="col-md-6">
                        <table>
                            <thead>
                            <th>Sockets</th>
                            </thead>
                            <tbody className="text-center">
                            <tr>
                                <td>{r.Item.sockets.length}s {' '} {countLinks}</td>
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
                        <CopyToClipboard text={msg} onCopy={() => this.setState({copied: true})}>
                            <button type='text' className="btnToLink media-bottom pull-right media-right"> ~Message seller~ </button>
                        </CopyToClipboard>
                        <CopyToClipboard text={JSON.stringify(r)} onCopy={() => this.setState({copied: true})}>
                            <button type='text' className="btnToLink media-bottom"> debug </button>
                        </CopyToClipboard>
                    </div>

                </Panel>
            </li>

        );
    }
}

export default ItemRow;