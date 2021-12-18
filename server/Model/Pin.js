const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const pinSchema = new Schema({
  author: {
    type: String,
    required: true,
  },
  url: {
    type: String,
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  destination: {
    type: String,
    required: true,
  },
  size: {
    type: String,
    required: false,
  },
}, { timestamps: true });

pinSchema.index( { "createdAt": 1 } );

module.exports = mongoose.model('Pin', pinSchema);