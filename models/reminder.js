'use strict';

// eslint-disable-next-line no-undef
const mongoose = require('mongoose');

const reminderSchema = new mongoose.Schema({
  note: { type: String, required: true },
  date: { type: String },
  time: { type: String, },
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
});

// Customize output for `res.json(data)`, `console.log(data)` etc.
reminderSchema.set('toJSON', {
  virtuals: true, // include built in id
  transform: (doc, ret) => {
    delete ret._id;
    delete ret.__v;
  }
});

const Reminder = mongoose.model('Reminder', reminderSchema); 

module.exports = Reminder;
