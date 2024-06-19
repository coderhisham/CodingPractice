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

User.findOneAndDelete({ age: { $gt: 15 } })
  .then((res) => {
    console.log(res);
  })
  .catch((err) => {
    console.log(err);
  });

User.findByIdAndDelete("6672a00b64838440a58a317d")
  .then((res) => {
    console.log(res);
  })
  .catch((err) => {
    console.log(err);
  });
