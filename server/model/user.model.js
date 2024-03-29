const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
  fullName: {
    type: String,
  },
  email: {
    type: String,
  },
  password: {
    type: String,
  },
  role: {
    type: String,
    default: "user",
  },
  gender: {
    type: String,
  },
  otp: {
    type: Number,
  },
});

module.exports = mongoose.model("user", userSchema);
