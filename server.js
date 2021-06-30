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

app.get('/api/automatic-rotarty-phone', (req, res) => {
	res.json({
		user: {firstName:'John', lastName: 'Doe'},
		sortingUserMethod: '',
		showUserForm: false,
		showProjectForm: false,
		currentEmployeeId: undefined,
		currentSearchTerm: '',
		categoryFilter: '',
		toggleNavbar: false,
		automaticrotaryphone: [
			{
				id: 0,
				name: 'Jack',
				role: 'Data Scientist',
				bio: 'Ready to help',
				img: '',
				reminders: [{
					id: 0,
					note: 'check on algo',
					date: '2021-07-01',
				},
				{
					id: 1,
					note: 'Meeting',
					date: '2021-07-01',
				},
				],
				posts: [{
					id: 0,
					type: 'issue',
					title: 'Something is broken.',
					date: 'Fri Dec 14 2018',
					description: 'It is not working',
					log_img: '" alt="Screen-Shot-2018-12-31-at-8-30-37-AM'
				},
				{
					id: 1,
					type: 'resources',
					title: 'Interview',
					date: 'Fri July 1 2021',
					skills: ['python', 'docker'],
					degree: ['BA'],
					previousJob: ['unknown'],
					notes: 'Seems promising!',
				}
				]
			}, {
				id: 1,
				name: 'Jane',
				role: 'Dev',
				bio: 'Ready to help',
				img: '',
				reminders: [{
					id: 0,
					note: 'Give Shot',
					date: 'Daily'
				}, ]
			}, ]
	});
});

app.listen(8080);