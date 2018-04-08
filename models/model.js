'use strict';

const mongoose = require('mongoose');
let Schema = mongoose.Schema;

let ClassSchema = new mongoose.Schema({
  	Name: String,
  	Primary: String,
  	Secondary: String 
});

let Classes = mongoose.model('classes', ClassSchema);

module.exports = Classes;