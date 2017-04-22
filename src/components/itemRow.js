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
    render() {
        const r = this.props.item;
        const msg = '@' + r.lastCharacterName + ' Hi, I would like to purchase ' + r.Item.name + ' ' + r.Item.typeLine + ' listed for ' + r.Item.note + ' in tab ' + r.stash;
        return (
            <li className="media container-fluid">
                <Panel className="itemPanel">

                    <div className="media-left"><img src={r.Item.icon}/></div>
                    <div className="media-body">
                        <div className="media-top">
                            <div className="media-heading"><h5>{r.Item.name}</h5>   <h6>{'   ' + r.Item.typeLine}</h6></div>
                        </div>
                        <div className="media-middle">
                        <div className="col-md-5">
                            <Mods item={r.Item}/>
                        </div>
                        <div className="col-md-6">

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