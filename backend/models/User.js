const mongoose = require("mongoose");
const { Schema } = mongoose;

const userSchema = new Schema({
  googleId: {
    type: String,
    required: true,
    unique: true,
  },
  displayName: {
    type: String,
    required: true,
  },
  name: {
    familyName: String,
    givenName: String,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
},{timestamps:true});

const User = mongoose.model("User", userSchema);

module.exports = User;
