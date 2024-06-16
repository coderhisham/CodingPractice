//Model in mongoose is a class with construct documents

const mongoose = require("mongoose");

//Connecting
connectDB()
  .then(() => {
    console.log("Connected to DB");
  })
  .catch((err) => {
    console.log(`Connection failed with error: ${err}`);
  });

async function connectDB() {
  await mongoose.connect("mongodb://127.0.0.1:27017/mongooseintegration");
}

//defining Schema
const userSchema = new mongoose.Schema({
  name: String,
  email: String,
  age: Number,
});

const employeeSchema = new mongoose.Schema({
  id: Number,
  name: String,
  email: String,
  age: Number,
});

//Creating a Model and Collection
const User /*Model Name*/ = mongoose.model("User", userSchema);
const Employee = mongoose.model("Employee", employeeSchema);
