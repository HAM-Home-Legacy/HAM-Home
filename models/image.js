const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const imageSchema = new Schema({
  photo: { type: String },
  description: { type: String },
});

module.exports = mongoose.model("image", imageSchema);
