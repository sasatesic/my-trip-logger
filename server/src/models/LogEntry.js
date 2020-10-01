const mongoose = require('mongoose');

const { Schema } = mongoose;

const logEntrySchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  description: String,
  comments: String,
  image: String,
  rating: {
    type: Number,
    min: 0,
    max: 10,
    default: 0,
  },
  longitude: {
    type: Number,
    min: -90,
    max: 90,
    required: true,
  },
  latitude: {
    type: Number,
    min: -180,
    max: 180,
    required: true,
  },
  visitDate: { required: true, type: Date },
}, {
  timestamps: true,
});

const LogEntry = mongoose.model('LogEntry', logEntrySchema);

module.exports = LogEntry;
