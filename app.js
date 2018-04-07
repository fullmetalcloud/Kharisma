//====LIST DEPENDENCIES===//
const express = require('express');
const parseurl = require('parseurl');
const bodyParser = require('body-parser');
const path = require('path');
const mongoose = require('mongoose');
//const Signature = require('./models/signature.js');
const app = express();
//const url = 'mongodb://localhost:27017/signatures';
//=========================//

//app.set("view engine", "ejs");

app.get("/", (req, res) => {
	console.log("we at the hompage bro");
	res.send("hello world");
});

app.listen(3000, function(){
   console.log("Server is listening!!!"); 
});