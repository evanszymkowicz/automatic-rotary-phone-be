const mongoose = require('mongoose');

const userfileSchema = new mongoose.Schema({
	name: { type: String, required: true },
	role: { type: String, required: true },
	gender: { type: String, required: true }, 
	img: { type: String, required: true },
	bio: { type: String },
	reminders: [{type: mongoose.Schema.Types.ObjectId, ref: 'Reminder'}],
	posts: [{type: mongoose.Schema.Types.ObjectId, ref: 'Post'}],
});


userfileSchema.set('toJSON', {
	virtuals: true,
	transform: (doc, ret) => {
		delete ret._id;
		delete ret._v;
	}
});

const Userfile = mongoose.model('Userfile', userfileSchema);

module.exports = Userfile;