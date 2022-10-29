const { Schema } = require("mongoose");

const projectSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  complete: {
    type: Boolean,
    required: true,
  }
});

module.exports = projectSchema;
