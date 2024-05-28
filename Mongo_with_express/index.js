const express = require("express");
const app = express();

const mongoose = require("mongoose");
const path = require("path");

app.set("views", path.join(__dirname,"views"));
app.set("view engine","ejs");





main().then(() =>{
    console.log("connection sucessful");
}).catch((err)=>{
    console.log(err);
});

async function main(){
    await mongoose.connect("mongodb://127.0.0.1:27017/whatsapp");
}



app.get("/",(req,res) =>{
    res.send("hello uday");
})



app.listen(3000, () =>{
    console.log("server is listening on port 3000");
});