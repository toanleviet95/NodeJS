var bodyParser = require('body-parser');
var urlencodedParser = bodyParser.urlencoded({ extended: false });
var jsonParser = bodyParser.json();

module.exports = function(app) {
    app.get('/', function(req, res) {
        // console.log('Cookies:', req.cookies);
        // res.send(`
        // <link rel='stylesheet' href='/assets/style.css' type='text/css' />
        // <h1>Hello Express</h1>
        // <p>Request time: ${req.requestTime}</p>
        // `);
        res.render('index');
    });

    app.get('/api', function(req, res) {
        res.json({
            name: 'Toan'
        })
    });

    app.get('/user/:id', function(req, res) {
        // res.cookie('username', req.params.id);
        // res.send(`<h1>Hello user ${ req.params.id }</h1>`)
        res.render('user', { ID: req.params.id, queryString: req.query.qstr })
    });

    app.post('/login', urlencodedParser, function(req, res) {
        res.send(`Welcome ${req.body.username}`);
        console.log(req.body.username);
        console.log(req.body.password);
    });

    app.post('/loginjson', jsonParser, function(req, res) {
        res.send('OK');
        console.log(req.body.firstname);
        console.log(req.body.lastname);
    });
}