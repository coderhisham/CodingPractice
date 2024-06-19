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

/**********************************************************************************/

let chats = [
  {
    from: "Hisham",
    to: "Haniya",
    message: "Hello, how are you?",
    created_at: new Date(),
  },
  {
    from: "Hanan",
    to: "Hisham",
    message: "bla bla blaaaaaaaaaa..",
    date: new Date(),
  },
  {
    from: "Hanan",
    to: "Haniya",
    message: "fsdfsdfsdfsdfsdf",
    date: new Date(),
  },
  {
    from: "Haniya",
    to: "Hisham",
    message: "asdasdqweqweqwe",
    date: new Date(),
  },
  {
    from: "Haniya",
    to: "Hisham",
    message: "saasdasddfsdfsdfbvfdgfdfgdfg",
    date: new Date(),
  },
];

Chat.insertMany(chats);
