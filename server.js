//dependencies
var express = require('express');
var mongoose = require('mongoose');
var bodyParser =require('body-parser');

//connect db
mongoose.connect('mongodb://mongocaly:yusuf326@ds143241.mlab.com:43241/caly');

//express
var app=express();
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

//routes:
app.use('/api',require('./routes/api'));

//start server

app.listen(1000);
console.log('server is running on port 1000');