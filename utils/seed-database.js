'use strict';

const mongoose = require('mongoose');

const { MONGODB_URI } = require('../config');

const Userfile = require('../models/userfile');
const Reminder = require('../models/reminder');
const User = require('../models/user');
const Post = require('../models/post');

const { userfiles, reminders, posts, users } = require('../db/seed/data');

console.log(`Connecting to mongodb at ${MONGODB_URI}`);

mongoose.connect(MONGODB_URI, { useNewUrlParser:true, useCreateIndex: true })
	.then(() => {
		console.log('Dropping the Database...');
		mongoose.connection.db.dropDatabase();
	})
	.then(() => {
		console.log('Seeding Database...');
		return Promise.all({
			Userfile.insertMany(userfiles),
			Reminder.insertMany(reminders),
			Post.insertMany(posts),
			User.insertMany(users),
		});
	})
	.then(([userfiles, reminders, posts, users]) => {
		console.log(`Inserted ${userfiles.length} userfiles and ${reminders.length} reminders and ${posts.length} posts`);
	})
	.then(() => {
		console.log('Disconnecting...');
		mongoose.disconnect();
	})
	.catch(err => {
		console.log(err);
	});