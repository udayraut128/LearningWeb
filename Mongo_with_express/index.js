const express = require("express");
const app = express();

const mongoose = require("mongoose");
const path = require("path");
const Chat = require("./models/chat.js");

app.set("views", path.join(__dirname,"views"));
app.set("view engine","ejs");

app.use(express.static(path.join(__dirname,"public")));





main().then(() =>{
    console.log("connection sucessful");
}).catch((err)=>{
    console.log(err);
});

async function main(){
    await mongoose.connect("mongodb://127.0.0.1:27017/whatsapp");
}

let chat1 = new Chat ({
    from:"uday",
    to:"sai",
    msg:"hello",
    created_at:new Date()
});

chat1.save().then((res) =>{
    console.log(res);
});



app.get("/chats",async (req,res) =>{
    let chats =await Chat.find();
    console.log(chats);
    res.render("index.ejs",{chats});
});

app.get("/chats/new", (req,res) =>{
res.render("new.ejs");
});

app.get("/",(req,res) =>{
    res.send("hello uday");
})



app.listen(3000, () =>{
    console.log("server is listening on port 3000");
});