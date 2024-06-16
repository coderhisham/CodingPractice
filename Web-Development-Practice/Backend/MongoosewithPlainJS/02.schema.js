//Schema defines the structure/shape of documents with in that collection

const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  name: String,
  email: String,
  age: Number,
});
