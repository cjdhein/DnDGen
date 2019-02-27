const express = require('express');
const app = express();
const cors = require('cors');
const path = require('path');
const bodyparser = require('body-parser');

app.use(cors({origin: 'null'}));
app.use(bodyparser.json());


const dataSource = require('./app/app');

app.get('/getSettlement', function(req,res) {

	var fromClient = req.query;

	var result = dataSource.generateSettlement(fromClient);
	console.log(result);
	res.send(result);
	

});

const server = app.listen(3007, function() {
	var host = server.address().address
	var port = server.address().port
	console.log("Listening on http://%s:%s",host,port);
});
