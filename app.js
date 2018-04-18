var express = require('express'),
    path = require('path'),
    bodyParser = require('body-parser'),
    cons = require('consolidate'),
    dust = require('dustjs-helpers'),
    pg = require('pg'),
    app = express();

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
app.use(bodyParser.urlencoded({ extended: false}));

// ROUTE
app.get('/', function(req, res){
    // console.log('Recipe App');

    // res.render('index');

        const { Client, Query } = require('pg')
        const query = client.query(new Query('SELECT NOW()'))
        query.on('row', (row) => {

        })
        query.on('end', (res) => {

        })
        query.on('error', (res) => {

        })
    

    
});


// Server
app.listen(3000, function(){
    console.log('Server Started on Port 3000');
});