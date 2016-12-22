var express = require('express');
var app = express();
var authRoute = require('./Auth/authRoute.js');
var schoolRoute = require('./School/schoolRoute.js');
var bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.use(express.static('client'));

app.use('/authRoute',authRoute);
app.use('/schoolRoute',schoolRoute);

app.get('/',function(req,res)
{
  console.log(__dirname);
  console.log("kali");
  res.sendfile(__dirname + '/client/index.html');
});


app.use(function (err, req, res, next) {
    res.status(err.status || 500);
    console.log(err);
    console.log('Error');
    res.json({
        message: err.message
        , title: 'error'
    });
});


module.exports = app;