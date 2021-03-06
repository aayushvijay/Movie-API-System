var express = require('express');
var app = express();
var request = require('request');
const { response } = require('express');
var chalk = require('chalk');
app.set('view engine', 'ejs');

app.get('/', (req, res) => {
    res.render("results");
});

app.get('/results', (req, res) => {
    var query = req.query.search;
    var url = "http://www.omdbapi.com/?apikey=4187cf5b&s=" + query;
    request(url, (error, response, body) => {
        if (!error && response.statusCode == 200) {
            var data = JSON.parse(body);
            res.render("results", { data: data });
        }
    });
});

app.listen(8080, function() {
    console.log(chalk.inverse.magenta("Movie app has started"));
});
