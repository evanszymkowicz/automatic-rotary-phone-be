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
				date: '2021-07-02'
			},
			{
				id: 1,
				note: 'interview',
				date: '2021-07-02'
			},
		],
		posts: [
			{
				id: 0,
				type: 'action',
				title: 'pushing to prod',
				date: 'Tue July 6 2021',
				description: 'This change is ready',
				layers: ['UI', 'Database'],
				post_img: ' ',
				notes: 'Looks good!',
			},
			{
				id: 1,
				type: 'request',
				title: 'pto',
				date: 'Tue July 6 2021'
			}
		]
	},
	{
		id: 1,
		name: 'John',
		bio: 'Ready to help',
		img: 'https://i.ibb.co/stMyFMp/IMG-6267.png',
		reminders: [{
			id: 0,
			note: 'meeting',
			date: 'Daily'
		}, ]
	},
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