/**
 * Created by Anthony Lord on 2017-04-14.
 */
import React from 'react';
import ItemRow from './itemRow'

//const mods =


/*{"Item":{"name":"","typeLine":"Ancient Reliquary Key","properties":null,"requirements":null,"sockets":[],"explicitMods":null,"implicitMods":null,"utilityMods":null,"enchantMods":null,"craftedMods":null,"cosmeticMods":null,"note":"~price 81 chaos","verified":false,"w":1,"h":1,"ilvl":78,"icon":"https://web.poecdn.com/image/Art/2DItems/Maps/VaultMap.png?scale=1&w=1&h=1&v=cb50511b7087323b10a19559bfb2be293","league":"Legacy","id":"40eb0c43fa649da0662eebf551dc0998924098e5be254a34c2c853738d0be4ce","identified":true,"corrupted":false,"lockedToCharacter":false,"support":false,"descrText":"Travel to the Ancient Reliquary by using this item in the Eternal Laboratory or a personal Map Device. Can only be used once.","secDescrText":"","flavourText":["Whispered memory,\r","A shimmer in the darkness.\r","Forgotten no more."],"artFilename":"","frameType":0,"stackSize":0,"maxStackSize":0,"x":3,"y":8,"inventoryId":"Stash4","socketedItems":[],"isRelic":false,"talismanTier":0,"prophecyText":"","prophecyDiffText":""},"accountName":"eternity171","lastCharacterName":"lolsparktoo","id":"76e7b2e95d57c9c1e7d6584948ec3ce69c73b24117e64190c6754d8b287d5fb5","stash":"s","stashType":"PremiumStash","error":""}*/


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