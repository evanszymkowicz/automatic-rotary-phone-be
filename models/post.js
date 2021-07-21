'use strict';

const mongoose = require('mongoose');

const postSchema = new mongoose.Schema({
	type: { type: String, required: true },
	title: { type: String, required: true },
	date: { type: String, required: true },
	description: { type: String}, 
	post_img: { type: String },
	flags: [{ type: String }],
	instructions: [{ stype: String }],
	lead: { type: String },
	notes: { type: String },
});

//	output for `res.json(data)`
postSchema.set('toJSON', {
	virtuals: true,	//	the virtual id
	transform: (doc, ret) => {
		delete ret._id;
		delete ret._v;
	}
});

const Post = mongoose.model('Post', postSchema);

module.exports = Post;