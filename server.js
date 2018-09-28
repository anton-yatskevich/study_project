const express = require('express');

const app = express();
const cards = require('./cardsCreator');
const postCodes = require('./postCodes');

app.use((req, res, next) => {
	res.header('Access-Control-Allow-Origin', '*');
	res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
	next();
});

app.get('/cards', (req, res) => {
	setTimeout(() => {
		res.send(cards);
	}, 1500);
});

app.get('/postcode/:code', (req, res) => {
	const response = postCodes[req.params.code] || '';
	res.send(response);
});

app.listen(3000, () => {
	console.log('Server started');
});
