const express = require('express');
const { render } = require('express/lib/response');
const path = require('path');
const app = express();
const port = 8080;

app.set("view engine","ejs");
app.set("views",path.join(__dirname, "/views"))


app.listen(port,()=>{
    console.log(`Listening at port ${port}`);
});

app.get("/",(req,res)=>{
    res.render("home.ejs"); 
});

/*app.get("/ig/:username",(req,res)=>{
    let {username} = req.params;
    const followers = ['Ab','abc','qqq']
    res.render("insta.ejs",{username,followers})
});*/

app.get("/ig/:username",(req,res)=>{
    let {username} = req.params;
    const instaData = require('./data.json');
    const data = instaData[username]
    if(data){
        res.render("insta.ejs",{data});
    }
    else{
        res.render("error.ejs");
    }
    
    
});

app.get("/rollDice",(req,res)=>{
    let diceValue = Math.floor(Math.random()*6)+1;
    res.render("rollDice.ejs", {diceValue});
});

