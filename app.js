//server
'use strict'

//====LIST DEPENDENCIES===//
const express = require('express');
const parseurl = require('parseurl');
const bodyParser = require('body-parser');
const path = require('path');
const mongoose = require('mongoose');
const app = express();
const router = express.Router();
const Classes = require('./models/model');
const match = require('./match.js');
const uri = "mongodb://admin:hihihi@kharismacluster-shard-00-00-vocgi.mongodb.net:27017,kharismacluster-shard-00-01-vocgi.mongodb.net:27017,kharismacluster-shard-00-02-vocgi.mongodb.net:27017/Classes?ssl=true&replicaSet=KharismaCluster-shard-0&authSource=admin";
//=========================//

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true })) // handle URL-encoded data

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

router.post('/api', (req, res) => {
	let attributes = {
		"Str": req.body.Str,
		"Dex": req.body.Dex,
		"Con": req.body.Con,
		"Int": req.body.Int,
		"Wis": req.body.Wis,
		"Cha": req.body.Cha
	};


	//open the connection to the database
	mongoose.Promise = global.Promise;
	mongoose.connect(uri);
	let db = mongoose.connection;
	db.on('error', console.error.bind(console, 'connection error:'));
	db.once('open', function() {
	  	// we're connected!!
	  	// find each person with a last name matching 'Ghost', selecting the `name` and `occupation` fields
		Classes.find({}, (err, classes) => {
			var results = match.determinecharacters(attributes, classes);
			console.log(results);
			res.json(results);
		});
	});
});

app.use('/', router);
// Priority serve any static files.
app.use(express.static(path.resolve(__dirname, '../Kharisma-Client/client/public')));

app.listen(3001, function(){
   console.log("Server is listening!!!"); 
});