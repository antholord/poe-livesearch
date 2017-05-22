const express = require('express');
const path = require('path');
const port = process.env.PORT || 8080;
const app = express();
let mongodb = require("mongodb");

let items = {items : []};
let types = {types : []};
let mods = {mods : []};

let db;

app.use(express.static(__dirname));


mongodb.MongoClient.connect("mongodb://test:test@ds123371.mlab.com:23371/heroku_lnc7sl64", function (err, database) {
    if (err) {
        //console.log(err);
        process.exit(1);
    }
    console.log("Connected to DB successfully");
    // Save database object from the callback for reuse.
    db = database;
    getItems();
    getTypes();
    getMods();

});
//Load data

function getMods() {
    db.collection("Mods").find({}).toArray(function (err, docs) {
        if (err) {
            handleError(res, err.message, "Failed to get Mods");
        } else {
            mods = {mods : []};
            docs.forEach(function(entry) {
                mods.mods.push({label : entry.mod, value : entry.mod});
            });
        }
    });
}
function getItems() {
    db.collection("Items").find({}).toArray(function (err, docs) {
        if (err) {
            handleError(res, err.message, "Failed to get Items");
        } else {
            items = {items : []};
            docs.forEach(function(entry) {
                items.items.push({label : entry.value, value : entry.value})
            });
        }
    });
}
function getTypes() {
    db.collection("Types").find({}).toArray(function (err, docs) {
        if (err) {
            handleError(res, err.message, "Failed to get Types");
        } else {
            types = {types : []};
            docs.forEach(function(entry) {
                types.types.push({label : entry.value, value : entry.value})
            });
        }
    });
}

app.get('/api/items', (req,res) => {
    console.log("Sending items to client");
    res.json(items);
});
app.get('/api/types', (req,res) => {
    console.log("Sending types to client");
    res.json(types);
});
app.get('/api/mods', (req,res) => {
    console.log("Sending mods to client");
    res.json(mods);
});
app.get('*', (req, res) => {
    console.log("Serving index");
    res.sendFile(path.resolve(__dirname, 'index.html'));
});
app.listen(port);
console.log("Listening on port : " + port);





