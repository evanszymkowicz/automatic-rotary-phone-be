'use strict';

const mongoose = require('mongoose');

const userfileSchema = new mongoose.Schema ({
	name: { type: String, required: true },
	role: { type: String, required: true },
	img: { type: Object, required: true},
	bio: { type: String },
	reminders: [{type: mongoose.Schema.Types.ObjectId, ref: 'Reminder'}],
	posts: [{type: mongoose.Schema.Types.ObjectId, ref: 'Post'}],
	userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
});

//// Customize output for `res.json(data)`, `console.log(data)` etc.
userfileSchema.set('toJSON', {
	virtuals: true, // include virtual id
	transform: (doc, ret) => {
		delete ret._id;
		delete ret._v;
	}
});

const Userfile = mongoose.model('Userfile', userfileSchema);

module.exports = Userfile;