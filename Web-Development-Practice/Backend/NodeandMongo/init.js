const mongoose = require('mongoose');
const Chat = require("./models/chat.js")

main()
    .then((res)=>{
        console.log("Database Connected!!")
    })
    .catch(err=> console.log(err));

async function main() {
    await mongoose.connect('mongodb://127.0.0.1:27017/echat')
}

let allChats = [
    {
        from: "Hisham",
        to:"Hanan",
        message: "Hello!!.How are you ?",
        created_at: new Date()
    },
    {
        from: "Hanan",
        to:"Haniya",
        message: "Hi!!.How are you ?",
        created_at: new Date()
    }
]
Chat.insertMany(allChats);
