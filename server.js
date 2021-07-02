'use strict';

const express = require('express');
const cors = require('cors');
const {CLIENT_ORIGIN} = require('./config');

const app = express();

app.use(
	cors({
		origin: CLIENT_ORIGIN
	})
);

let userfiles = [
	{
		id: 0,
		name: 'Jane',
		role: 'Data Scientist',
		bio: 'ready to help',
		img: '',
		reminders: [
			{
				id: 0,
				note: 'meeting',
				date: 2021-07-02
			},
			{
				id: 1,
				note: 'interview',
				date: 2021-07-02
			},
		],
	}
];

app.get('/api/userfiles', (req, res) => {
	res.json({
		userfiles: userfiles
	});
});

app.get('/api:userfileId', (req, res, next) => {
	let userfile = userfiles.find(userfile=>req.params.userfileId==userfile.id);
	// console.log('in server, userfile is', userfile);
	if (userfile) {
		console.log('sending back response');
		res.json({
			userfile: userfile
		});
	} else {
		console.log('jumping to error');
		next();
	}

	});

	// Custom Error Handler
	app.use((err, req, res, next) => {
		if (err.status) {
			const errBody = Object.assign({}, err, {
				message: err.message
			});
			res.status(err.status).json(errBody);
		} else {
			console.error(err);
			res.status(500).json({
				message: 'Internal Server Error'
			});
		}
});

app.listen(8080);