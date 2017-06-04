var restful = require('node-restful');
var mongoose = restful.mongoose;

//schema

var statusSchema = new mongoose.Schema({

daily:String,
date:String,
username:String

});

//return models
module.exports = restful.model('tblstatus',statusSchema);