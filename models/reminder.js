const mongoose = require('mongoose');

const reminderSchema = new mongoose.Schema({
  note: { type: String, required: true },
  date: { type: String, required: true },
});

// include virtual id
reminderSchema.set('toJSON', {
  virtuals: true,
  transform: (doc, ret) => {
    delete ret._id;
    delete ret.__v;
  }
});

const Reminder = mongoose.model('Reminder', reminderSchema); 

module.exports = Reminder;