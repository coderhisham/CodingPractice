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

//Creating a Model and Collection
const User /*Model Name*/ = mongoose.model("User", userSchema);

/**************************************************************************************************************************/

//Find
User.find({ age: { $gt: 15 } })
  .then((result) => {
    console.log(result);
  })
  .catch((err) => {
    console.log(err);
  });

//Find One
User.findOne({ age: { $gt: 15 } })
  .then((result) => {
    console.log(result);
  })
  .catch((err) => {
    console.log(err);
  });

//findById
User.findById("666f32ec18e1b38cc91530c6")
  .then((result) => {
    console.log(result);
  })
  .catch((err) => {
    console.log(err);
  });
