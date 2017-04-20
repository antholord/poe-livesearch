/**
 * Created by Anthony Lord on 2017-04-14.
 */
import React from 'react';
import CopyToClipboard from 'react-copy-to-clipboard';
import {Panel} from "react-bootstrap";

class ItemRow extends React.Component {
    constructor(props){
        super(props);
        this.state = { copied : false};
    }
    render() {
        const r = this.props.item;
        const msg = '@' + r.lastCharacterName + ' Hi, I would like to purchase ' + r.Item.name + ' ' + r.Item.typeLine + ' listed for ' + r.Item.note;
        return (
            <Panel className="itemPanel">
            <li className="media container-fluid">
                <div className="media-left"><img src={r.Item.icon}/></div>
                <div className="media-body">
                    <div className="media-top">
                        <h4 className="media-heading">{r.Item.name}  {' '}  {r.Item.typeLine}</h4>

                    </div>
                    <div className="media-middle">
                    </div>
                    <div className="media-bottom">
                        <span>Name : {r.lastCharacterName}  {'  '}  Account : {r.accountName}</span>
                    </div>


                </div>
                <div className="media-right">
                    <span> Note : {r.Item.note}</span>

                    <CopyToClipboard text={msg} onCopy={() => this.setState({copied: true})}>
                        <button type='text' className="btnToLink media-right"> ~Message seller~ </button>
                    </CopyToClipboard>
                </div>



            </li>
            </Panel>
        );
    }
}
/*{"Item":{"name":"","typeLine":"Ancient Reliquary Key","properties":null,"requirements":null,"sockets":[],"explicitMods":null,"implicitMods":null,"utilityMods":null,"enchantMods":null,"craftedMods":null,"cosmeticMods":null,"note":"~price 81 chaos","verified":false,"w":1,"h":1,"ilvl":78,"icon":"https://web.poecdn.com/image/Art/2DItems/Maps/VaultMap.png?scale=1&w=1&h=1&v=cb50511b7087323b10a19559bfb2be293","league":"Legacy","id":"40eb0c43fa649da0662eebf551dc0998924098e5be254a34c2c853738d0be4ce","identified":true,"corrupted":false,"lockedToCharacter":false,"support":false,"descrText":"Travel to the Ancient Reliquary by using this item in the Eternal Laboratory or a personal Map Device. Can only be used once.","secDescrText":"","flavourText":["Whispered memory,\r","A shimmer in the darkness.\r","Forgotten no more."],"artFilename":"","frameType":0,"stackSize":0,"maxStackSize":0,"x":3,"y":8,"inventoryId":"Stash4","socketedItems":[],"isRelic":false,"talismanTier":0,"prophecyText":"","prophecyDiffText":""},"accountName":"eternity171","lastCharacterName":"lolsparktoo","id":"76e7b2e95d57c9c1e7d6584948ec3ce69c73b24117e64190c6754d8b287d5fb5","stash":"s","stashType":"PremiumStash","error":""}*/

/*
 <table>
 <tbody className="itemBody">
 <tr className="result-item">
 <td></td>
 <td>{r.Item.name}</td>
 <td>{r.Item.typeLine}</td>
 <td>{r.Item.note}</td>
 </tr>
 <tr className="result-bottom">
 <td>Name : {r.lastCharacterName}</td>
 <td>Account : {r.accountName} </td>
 <td>
 <CopyToClipboard text={msg} onCopy={() => this.setState({copied: true})}>
 <button type='text' className="btnToLink"> ~Message seller~ </button>
 </CopyToClipboard>
 </td>
 <td>
 <CopyToClipboard text={JSON.stringify(r)} onCopy={() => this.setState({copied: true})}>
 <button type='text' className="btnToLink"> debug </button>
 </CopyToClipboard>
 </td>
 </tr>
 </tbody>
 </table>

 */

const ItemTable = (props) => {
    const itemList = props.rows.map((item, index) => {

        return <ItemRow item={item} key={index}/>
});
    if (props.rows.length === 0){
        return (
            <div className="container main top30">
                <h2 className="text-center">Listening...</h2>
            </div>
        );
    }
    return (
            <div className="container main top30">
                <ul className="col-md-12 list-unstyled">
                    {itemList}
                </ul>
            </div>
    );
};

export default ItemTable;