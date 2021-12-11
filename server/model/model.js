const mongoose = require("mongoose");

let schema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: false,
  },
  gender: String,
  status: String,
});

const Userdb = mongoose.model("userdb", schema);
module.exports = Userdb;
