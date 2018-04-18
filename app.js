var express = require('express'),
    path = require('path'),
    bodyParser = require('body-parser'),
    cons = require('consolidate'),
    dust = require('dustjs-helpers'),
    pg = require('pg'),
    app = expres();

// DB Connect String
var connect = "postgres://jesray:password@localhost/recipeapp";

//Assign Dust engine To .dust files
app.engine('dust', cons.dust);
    
// Set Default Ext .dust
app.set('view engine', 'dust');
app.set('views', __dirname + '/views');

// Set Public Folder
app.use(express.static(path.join(__dirname, 'public')));

// Body Parser Middleware
app.use(bodyParser.json());
app.user(bodyParser.urlencoded)