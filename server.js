const express = require('express');
const app = express();
const data = require('./cardsCreator');

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
}); 

app.get('/', function (req, res) {
    res.send(data);
});

app.listen(3000, function () {
    console.log('Server started');
});
