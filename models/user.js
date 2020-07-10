const mongoose = require("mongoose");

var Schema = mongoose.Schema;

var usersSchema = new Schema({
  fullName: String,
  gender: String,
  password: String,
  email: { type: String, unique: true },
  dateOfBirth: String,
  state: String,
  address: String,
  phoneNumber: { type: String, unique: true },
});

module.exports = mongoose.model("Users", usersSchema);
