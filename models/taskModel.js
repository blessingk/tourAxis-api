const mongoose = require('mongoose');

const Task = mongoose.model('Task', {
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  name: String,
  description: String,
  date_time: Date,
  status: { type: String, default: 'pending' },
});

module.exports = Task;
