const mongoose = require("mongoose");

const userSchama = new mongoose.Schema({
  fname: {
    type: String,
    require: true,
  },
  lname: {
    type: String,
    require: true,
  },
  email: {
    type: String,
    require: true,
  },
  dob: {
    type: Date,
    require: true,
  },
  gender: {
    type: String,
    enum: ["male", "female", "other"],
  },
  country: {
    type: String,
    require: true,
  },
  bio: {
    type: String,
    require: true,
  },
});

const userModel = mongoose.model("user", userSchama);
module.exports = userModel;
