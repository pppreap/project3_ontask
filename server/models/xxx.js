onst { Schema, model } = require('mongoose');

const xxxSchema = new Schema({
  x1: {
    type: String,
    required: true,
  },
  tx2: {
    type: String,
    required: true,
  },
  x1_x: {
    type: Number,
    default: 0,
  },
  x2_x: {
    type: Number,
    default: 0,
  },
});

const xxx = model('xxx', xxxSchema);

module.exports = xxx;
