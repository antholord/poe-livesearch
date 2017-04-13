/*var express = require('express'); 
var serverPort = 8080;
var app = express();
app.use(express.static(__dirname + "/src"));

var server = app.listen(process.env.PORT || serverPort, function () {
			var port = server.address().port;
			//console.log("App now running on port", port);
		});
		
app.get('/*', function(req, res){
    res.sendFile(__dirname + '/index.html');
});*/

const express = require('express');
const path = require('path');
const port = process.env.PORT || 8080;
const app = express();

app.use(express.static(__dirname));

app.get('*', (req, res) => {
	res.sendFile(path.resolve(__dirname, 'index.html'));
});

app.listen(port);
console.log("Listening on port : " + port);
