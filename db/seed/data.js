'use strict';

const userfiles = [
	{
		_id: '111111111111111111111101',
		name: 'Jane Doe',
		role: 'Data scientist',
		bio: 'ready to get started',
		img: 'https://i.imgur.com/RUzlFm9.png',
		reminders: ['3333333333301', '3333333333302'],
		posts: ['2222222222201', '2222222222202'],
	},
	{
		_id: '111111111111111111111102',
		name: 'Jack John',
		role: 'Engineer',
		bio: 'here to help',
		img: 'https://i.imgur.com/RUzlFm9.png',
		reminders: ['333333333333333333333303'],
		posts: ['222222222222222222222203']
	},
];

const reminders = [
	{
		_id: '3333333333301',
		note: 'Staff Meeting',
		date: '2021-07-22',
	}, 
	{
		_id: '3333333333302',
		note: 'Interview',
		date: '2021-07-20',
	}, 
	{
		_id: '333333333333333333333303',
		note: 'Stand Up',
		date: '2021-07-21',
	}, 
];

const posts = [
	{
		_id: '2222222222201',
		type: 'issue',
		title: 'Looks good',
		date: 'Mon July 19 2021',
		description: 'Checked it out. Looks okay.',
		post_img: 'https://i.imgur.com/Fe53Q2d.jpg'
	}, 
	{
		_id: '2222222222202',
		type: 'hiring',
		title: 'engineer candidate',
		date: 'Mon July 19 2021',
		flags: ['front end', 'director'],
		lead: 'Bob',
		notes: 'Sounds promising!',
	},
	{
		_id: '222222222222222222222203',
		type: 'other',
		title: 'get more diet soda',
		date: 'Tue July 20 2021',
		flags: ['office'],
		instructions: 'remember to expense',
	},
];

module.exports = {userfiles, reminders, posts};