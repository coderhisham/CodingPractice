const express = require("express");
const app = express();
const mongoose = require("mongoose");
const path = require("path");
const Chat = require("./models/chat.js");

const port = 8080;

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

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");
app.use(express.static(path.join(__dirname, "public")));

app.listen(port, () => {
  console.log(`Listening at ${port}`);
});

app.get("/", (req, res) => {
  res.send("Root is working");
});

app.get("/chats", async (req, res) => {
  let chats = await Chat.find();
  res.render("chats.ejs", { chats });
});

app.get("/chats/new", (req, res) => {});
