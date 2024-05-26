const express = require('express');
const app = express();
const port = 7800;

app.listen(port,()=>{
    console.log(`Server is Listening ${port}`);
})

/*app.use((req,res)=>{
    console.log("Request Recieved");
    const code = "<h1>Hello</h1>";
    res.send({
        name: "Hisham",
        place: "Kerala"

    });
});*/

app.get("/",(req,res)=>{
    res.send("You Contacted root path");
})
app.get("/home",(req,res)=>{
    
    res.send("Hello Hisham!!!");
});
/*app.get("*",(req,res)=>{
    res.send("404 Error");
})*/

app.post("/",(req,res)=>{
    res.send("You Chose Post in Root path");
})

//variable
//Path Parameter
app.get("/:username/:id",(req,res)=>{
    let {username , id} = req.params;
    res.send(`Welcome to Index.js ${username}`);
})


//Query Strings
app.get("/search",(req,res)=>{
    let {q} = req.query;
    if(!q){
        res.send("Nothing Searched");
    }
    res.send(`Search results for ${q}`);
});


