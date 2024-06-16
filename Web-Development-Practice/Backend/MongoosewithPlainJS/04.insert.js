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

//InsertOne
const user1 = new User({ name: "hisham", email: "hisham@yahoo.com", age: 20 });
/* By default this method doesn't reflects the change on DB it only stores the change in memory so we need to push it to DB from memory by using save function */
user1
  .save()
  .then((result) => {
    console.log(result);
  })
  .catch((err) => {
    console.log(err);
  });

//Insert Many
User.insertMany([
  { name: "Hanan", email: "Hanan@yahoo.com", age: 16 },
  { name: "Haniya", email: "Haniya@yahoo.com", age: 11 },
])
  .then((result) => {
    console.log(result);
  })
  .catch((err) => {
    console.log(err);
  });
/*By default insertMany function pushes data directly so we don't need to push data again*/
