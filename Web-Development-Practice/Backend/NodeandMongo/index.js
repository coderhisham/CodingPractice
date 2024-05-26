const express = require('express');
const app = express();
const mongoose = require('mongoose');
const path = require('path');
const Chat = require("./models/chat.js")

app.set("views", path.join(__dirname,"views"));
app.set("view engine","ejs");
app.use(express.static(path.join(__dirname,"public")))


main()
    .then((res)=>{
        console.log("Database Connected!!")
    })
    .catch(err=> console.log(err));

async function main() {
    await mongoose.connect('mongodb://127.0.0.1:27017/echat')
}

app.listen(8080,()=>{
    console.log("Listening on Port 8080");
})

app.get('/',(req,res)=>{
    res.send('Root is working!!!')
})

//chats Route
app.get('/chats',async (req,res)=>{
    let chats = await Chat.find();
    res.render('index.ejs',{chats});
})