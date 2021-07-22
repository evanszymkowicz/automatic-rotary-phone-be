'use strict';

const express = require('express');
const morgan = require('morgan');
const mongoose = require('mongoose');
const cors = require('cors');

const userfilesRouter = require('./routes/userfiles');

const {
	CLIENT_ORIGIN,
	PORT,
	DB_HOST,
	DB_NAME,
	DB_PORT,
	DB_USER,
	DB_PASS,
	NODE_ENV,
	IS_LOCAL_MONGO
} = require('./config');

const IS_DEV = NODE_ENV === 'development';

const app = express();

app.use(
	cors({
		origin: IS_DEV ? '*' : CLIENT_ORIGIN
	})
);

// Log all requests, skip during tests
app.use(morgan(IS_DEV ? 'dev' : 'common', {
	skip: () => NODE_ENV === 'test'
}));

// Parse request body
app.use(express.json());

app.use('/api/userfiles', userfilesRouter);

if (IS_DEV) {
	const seedRouter = require('./routes/seed');
	app.use('/api/seed', seedRouter);
}


// Custom 404 Not Found route handler
app.use((req, res, next) => {
	const err = new Error('Not Found');
	err.status = 404;
	next(err);
});

// Custom Error Handler
app.use((err, req, res, next) => {
	if (err.status) {
		const errBody = Object.assign({}, err, { message: err.message });
		res.status(err.status).json(errBody);
	} else {
		console.error(err);
		res.status(500).json({ message: 'Internal Server Error' });
	}
});

if (require.main === module) {
	//  // Connect to DB and Listen for incoming connections
	const protocol = IS_LOCAL_MONGO ? 'mongodb' : 'mongodb+srv';
	const MONGODB_URI = IS_LOCAL_MONGO ? `${protocol}://${DB_HOST}:${DB_PORT}/${DB_NAME}` : `${protocol}://${DB_USER}:${DB_PASS}@${DB_HOST}:${DB_PORT}/${DB_NAME}`;
	console.log(MONGODB_URI)
	mongoose.connect(MONGODB_URI, { useNewUrlParser:true, useUnifiedTopology: true }) //Mongo will automatically create the db here if it doesnt exist, and then mongoose will automatically create any collections that dont already exist by going through your models
		.catch(err => {
			console.error(`ERROR: ${err.message}`);
			console.error('\n === Did you remember to start `mongod`? === \n');
			console.error(err);
		});

	app.listen(PORT, function () {
		console.info(`Server listening on ${this.address().port}`);
	}).on('error', err => {
		console.error(err);
	});
}

module.exports = app; // Export for testing