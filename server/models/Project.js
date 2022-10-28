const { Schema } = require("mongoose");

const userSchema = require("./User");

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
  },
  user: [userSchema],
});

module.exports = projectSchema;
