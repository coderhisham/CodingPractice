const mongoose = require("mongoose");
const Chat = require("./models/chat.js");

connectDB()
  .then(() => {
    console.log("DB Connected");
  })
  .catch((err) => {
    console.log(err);
  });

async function connectDB() {
  await mongoose.connect("mongodb://127.0.0.1:27017/chatsapp");
}
