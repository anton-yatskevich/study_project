const express = require('express');
const app = express();
const data = require('./cardsCreator');

app.get('/', function (req, res) {
    res.send(data);
});

app.listen(3000, function () {
    console.log('Server started');
});
