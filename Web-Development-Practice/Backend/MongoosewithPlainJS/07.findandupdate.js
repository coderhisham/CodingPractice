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
/*************************************************************************************************************************************/

//Find One and Update
User.findOneAndUpdate({ age: { $gt: 15 } }, { age: 42 }) //Here new is false by default
  .then((res) => {
    console.log(res);
  })
  .catch((err) => {
    console.log(err);
  });

/* By default this method returns the old document so we need to modify that with another parameter..*/
User.findOneAndUpdate({ age: { $gt: 15 } }, { age: 55 }, { new: true })
  .then((res) => {
    console.log(res);
  })
  .catch((err) => {
    console.log(err);
  });

//Find By ID and Update
User.findByIdAndUpdate("666f32ec18e1b38cc91530c7", { age: 16 }) //Here new is false by default
  .then((res) => {
    console.log(res);
  })
  .catch((err) => {
    console.log(err);
  });

/* By default this method returns the old document so we need to modify that with another parameter..*/
User.findByIdAndUpdate("666f32ec18e1b38cc91530c6", { age: 20 }, { new: true })
  .then((res) => {
    console.log(res);
  })
  .catch((err) => {
    console.log(err);
  });
