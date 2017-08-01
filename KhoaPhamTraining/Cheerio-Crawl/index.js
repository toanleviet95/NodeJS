var express = require('express');
var app = express();
var request = require('request');
var cheerio = require('cheerio');

app.use(express.static('public'));

app.set('view engine', 'ejs');
app.set('views', './views');
const port = 3000;

app.listen(port, () => console.log(`Listening on ${port}`));

app.get('/', function(req, res) {
    request('http://vnexpress.net', function(err, response, body) {
        if (err) {
            res.render('trangchu', { html: "Error Occured" });
        } else {
            $ = cheerio.load(body);
            var ds = $(body).find('div.title_news > a');
            // console.log(ds);
            ds.each(function(i, e) {
                //console.log($(this).text());
                console.log(e['attribs']['href']);
            });
            res.render('trangchu', { html: ds });
        }
    });
});