'use strict';

const mongoose = require('mongoose');

const postSchema = new mongoose.Schema({
	type: { type: String, required: true },
	title: { type: String, required: true },
	date: { type: String, required: true },
	description: { type: String}, 
	post_img: { type: String },
	notes: { type: String },
	layers: [{type: String}],
});

//	Customize output for `res.json(data)`, `console.log(data)` etc.
postSchema.set('toJSON', {
	virtuals: true,	//	the virtual id
	transform: (doc, ret) => {
		delete ret._id;
		delete ret._v;
	}
});

const Post = mongoose.model('Post', postSchema);

module.exports = Post;