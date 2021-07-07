const mongoose = require('mongoose');

const reminderSchema = new mongoose.Schema({
  note: { type: String, required: true },
  date: { type: String, required: true },
});

reminderSchema.set('toJSON', {
  virtuals: true,     // include built-in virtual `id`
  transform: (doc, ret) => {
    delete ret._id;
    delete ret.__v;
  }
});

const Reminder = mongoose.model('Reminder', reminderSchema); 

module.exports = Reminder;