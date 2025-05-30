const mongoose = require("mongoose");
require("dotenv").config();

mongoose.connect(process.env.MONGODB_URI, console.log("MongoDb Connected!"));

const userSchema = mongoose.Schema({
  name: String,
  email: String,
  contact: Number,
  password: String,
  address: String,
});

module.exports = mongoose.model("user", userSchema);
