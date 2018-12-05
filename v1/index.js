const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const mongoose = require('./connection/connection');

//setup express app
const app = express();


//Get the default connection
var db = mongoose.connection;

//Bind connection to error event (to get notification of connection errors)
db.on('error', console.error.bind(console, 'MongoDB connection error:'));

/// set headers
app.use(function(req, res, next) {
    var oneof = false;
    if(req.headers.origin) {
        res.header('Access-Control-Allow-Origin', req.headers.origin);
        oneof = true;
    }
    if(req.headers['access-control-request-method']) {
        res.header('Access-Control-Allow-Methods', req.headers['access-control-request-method']);
        oneof = true;
    }
    if(req.headers['access-control-request-headers']) {
        res.header('Access-Control-Allow-Headers', req.headers['access-control-request-headers']);
        oneof = true;
    }
    if(oneof) {
        res.header('Access-Control-Max-Age', 60 * 60 * 24 * 365);
    }

    // intercept OPTIONS method
    if (oneof && req.method == 'OPTIONS') {
        res.send(200);
    }
    else {
        next();
    }
});

// Listen for a request
app.listen(process.env.port || 200,function ()  {
    console.log("server started!");
});

// parser
app.use(bodyParser.json());

// Error handling middleware
app.use(function (err,req,res,next) {
    //console.log(err.message);
   res.send({error:err.message});
});

// initializing routes
app.use('/',require(path.join(__dirname,'/routes/api')));

// handle request
app.get('/',(req,res)=>{
    res.status(401);
    res.send("heheheh")
});