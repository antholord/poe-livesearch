import React from 'react'
import items from './items.json';
import types from './item-types.json'



const DataTransform = (props) => {
    const transformTypes= () =>{
        let output = [];
        let topLevelCategories = [];
        let subCategories = [];
        let bases = [];
        types.itemTypes.map((top) => {
            topLevelCategories.push({label :top.key, value : top.key});
            top.value.map((sub) => {
                subCategories.push({label :sub.key, value : sub.key});
                sub.value.map((base) => {
                    bases.push({label :base, value : base})
                });
            });
        });

        output.push(JSON.stringify({topCategories : topLevelCategories}));
        output.push(<br />);
        output.push(JSON.stringify({subCategories : subCategories}));
        output.push(<br />);
        output.push(JSON.stringify({bases : bases}));
        return (
            <span>{output}</span>
        );
    };
    return (
        <div>
            {transformTypes()}
        </div>
    );
};

export default DataTransform;