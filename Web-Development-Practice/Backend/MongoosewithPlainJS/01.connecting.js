const mongoose = require("mongoose");

connectDB()
  .then(() => {
    console.log("Succesfully Connected to DB");
  })
  .catch((err) => {
    console.log(`Connection Failed with error ${err}`);
  });

async function connectDB() {
  await mongoose.connect("mongodb://127.0.0.1:27017/mongooseintegration");
}
