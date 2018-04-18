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

    const { Pool, Client } = require('pg')

    // pools will use environment variables
    // for connection information
    const pool = new Pool()
    
    pool.query('SELECT NOW()', (err, res) => {
      console.log(err, res)
      pool.end()
    })
    
    // you can also use async/await
    const res = await pool.query('SELECT NOW()')
    await pool.end()
    
    // clients will also use environment variables
    // for connection information
    const client = new Client()
    await client.connect()
    
    const res = await client.query('SELECT NOW()')
    await client.end()
    
});


// Server
app.listen(3000, function(){
    console.log('Server Started on Port 3000');
});