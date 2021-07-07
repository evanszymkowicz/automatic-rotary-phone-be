'use strict';

const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const morgan = require('morgan');

const userfilesRouter = require('./routes/userfiles');

const {CLIENT_ORIGIN, PORT, MONGODB_URI} = require('./config');

const app = express();

app.use(
	cors({
		origin: CLIENT_ORIGIN
	})
);

//	this is skipped when run in a test env
app.use(morgan(process.env.NODE_ENV === 'development' ? 'dev' : 'common', {
	skip: () => process.env.NODE_ENV === 'test'
}));

//	parse request body
app.use(express.json());

app.use('/api/userfiles', userfilesRouter);

// let userfiles = [
// 	{
// 		id: 0,
// 		name: 'Jane',
// 		role: 'Data Scientist',
// 		bio: 'ready to help',
// 		img: 'https://i.imgur.com/RUzlFm9.png',
// 		reminders: [
// 			{
// 				id: 0,
// 				note: 'meeting',
// 				date: '2021-07-02'
// 			},
// 			{
// 				id: 1,
// 				note: 'interview',
// 				date: '2021-07-02'
// 			},
// 		],
// 		posts: [
// 			{
// 				id: 0,
// 				type: 'action',
// 				title: 'pushing to prod',
// 				date: 'Tue July 6 2021',
// 				description: 'This change is ready',
// 				layers: ['UI', 'Database'],
// 				post_img: 'https://i.imgur.com/Fe53Q2d.jpg',
// 				notes: 'Looks good!',
// 			},
// 			{
// 				id: 1,
// 				type: 'request',
// 				title: 'pto',
// 				date: 'Tue July 6 2021'
// 			}
// 		]
// 	},
// 	{
// 		id: 1,
// 		name: 'John',
// 		bio: 'Ready to help',
// 		img: 'https://i.imgur.com/RUzlFm9.png',
// 		reminders: [{
// 			id: 0,
// 			note: 'meeting',
// 			date: 'Daily'
// 		}, ]
// 	},
// ];

app.use((req, res, next) => {
	if (err.status) {
		const errBody = Object.assign({}, err, { message: err.message});
		res.status(err.status).json(errBody);
	} else {
		console.error(err);
		res.status(500).json({ message: 'Internal Server Error'});
	}
});
//	Mongo will create the db if none found
//	Will then create any collections that don't already exist by going through the models
if (require.main === module) {
	mongoose.connect(MONGODB_URI, { useNewUrlParser:true})
		.catch(err => {
			console.log(`ERROR: ${err.message}`);
			console.log('\n === Did you remember to start `mongod` ? === \n');
			console.error(err);
		});

		app.listen(PORT, function() {
			console.log(`Server listening on ${this.address(.port)}`);
		}).on('error', err => {
			console.log(err);
		});
}

module.exports = app;