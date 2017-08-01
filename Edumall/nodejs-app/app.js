var express = require('express');
var cookieParser = require('cookie-parser');
// var mysql = require('mysql');
var mongoose = require('mongoose');

var app = express();

var apiController = require('./controllers/apiController');
var homeController = require('./controllers/homeController');

var port = 3000;

mongoose.connect('mongodb://toanlv:kid1412lvt@ds131139.mlab.com:31139/nodetestdb');

var Schema = mongoose.Schema;

var personSchema = new Schema({
    firstname: String,
    lastname: String
});

var Person = mongoose.model('Person', personSchema);

app.set('view engine', 'ejs');

app.use('/assets', express.static(__dirname + '/public'));
app.use(cookieParser());
app.use('/', function(req, res, next) {
    console.log('Request URL:', req.url);
    req.requestTime = new Date();
    // var connection = mysql.createConnection({
    //     host: 'localhost',
    //     user: 'root',
    //     password: '',
    //     database: 'testdb',
    // });

    // connection.connect();
    // connection.query('select * from sinh_vien', function(err, rows) {
    //     if (err) {
    //         throw err;
    //     }
    //     console.log(rows[1].TEN);
    // });
    // connection.end();

    var person = Person({
        firstname: 'Toàn',
        lastname: 'Lê'
    });

    person.save(function(err) {
        if (err) throw err;
        console.log('Person was created...');
    });

    next();
});

apiController(app);
homeController(app);

app.listen(port, function() {
    console.log('Server is listening on port', port);
});