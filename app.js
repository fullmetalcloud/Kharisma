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
const uri = "mongodb://admin:hihihi@kharismacluster-shard-00-00-vocgi.mongodb.net:27017,kharismacluster-shard-00-01-vocgi.mongodb.net:27017,kharismacluster-shard-00-02-vocgi.mongodb.net:27017/Classes?ssl=true&replicaSet=KharismaCluster-shard-0&authSource=admin";
//=========================//

//app.set("view engine", "ejs");

router.get('/', (req, res) => {
	console.log("we at the hompage bro");
	res.send("hello world");
});

router.post('/api', (req, res) => {
	/*let attributes = {
		"str": req.body.Str,
		"dex": req.body.Dex,
		"con": req.body.Con,
		"int": req.body.Int,
		"wis": req.body.Wis,
		"cha": req.body.Cha
	};*/

	//open the connection to the database
	mongoose.Promise = global.Promise;
	mongoose.connect(uri);
	let db = mongoose.connection;
	db.on('error', console.error.bind(console, 'connection error:'));
	db.once('open', function() {
	  	// we're connected!!
	  	// find each person with a last name matching 'Ghost', selecting the `name` and `occupation` fields
		Classes.find({}, (err, classes) => {

			res.json(classes);
		});
	});
});

app.use('/', router);

app.listen(3000, function(){
   console.log("Server is listening!!!"); 
});