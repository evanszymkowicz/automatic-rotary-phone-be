const mongoose = require('mongoose');

const postSchema = new mongoose.model({
	type: { type: String, required: true },
	title: { type: String, required: true },
	date: { type: String, required: true },
	description: { type: String}, 
	post_img: { type: String },
	notes: { type: String },
});

postSchema.set('toJSON', {
	virtuals: true,
	transform: (doc, ret) => {
		delete ret._id;
		delete ret._v;
	}
});

const Post = mongoose.model('Post', postSchema);

module.exports = Post;