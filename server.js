const express = require('express');

const app = express();
const data = require('./cardsCreator');

app.use((req, res, next) => {
	res.header('Access-Control-Allow-Origin', '*');
	res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
	next();
});

app.get('/', (req, res) => {
	res.send(data);
});

app.listen(3000, () => {
	console.log('Server started');
});
