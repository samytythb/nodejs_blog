const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const Course = new Schema({
  name: { type: String, maxLength: 50 },
  age: { type: String, maxLength: 3 },
  createdAt: { type: Date, default: Date.now() },
  updatedAt: { type: Date, default: Date.now() },
});
module.exports = mongoose.model("Course", Course);
