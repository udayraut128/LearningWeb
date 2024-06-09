const express = require("express");
const app = express();

const mongoose = require("mongoose");
const path = require("path");
const Chat = require("./models/chat.js");
const methodOverride = require("method-override");


app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

app.use(express.static(path.join(__dirname, "public")));
app.use(express.urlencoded({ entended: true }));
app.use(methodOverride("_method"));

main()
  .then(() => {
    console.log("connection sucessful");
  })
  .catch((err) => {
    console.log(err);
  });

async function main() {
  await mongoose.connect("mongodb://127.0.0.1:27017/wanderlust");
}

// let chat1 = new Chat ({
//     from:"udaygghg",
//     to:"sai",
//     msg:"hello",
//     created_at:new Date()
// });

// chat1.save().then((res) =>{
// console.log(res);
// });

app.get("/chats", async (req, res) => {
  let chats = await Chat.find();
  res.render("index.ejs", { chats });
});

// new route
app.get("/chats/new", (req, res) => {
  res.render("new.ejs");
});

// create route
app.post("/chats", async (req, res) => {
  let { from, to, msg } = req.body;
  let newChat = new Chat({
    from: from,
    to: to,
    msg: msg,
    created_at: new Date(),
  });
  await newChat
    .save()
    .then((res) => {
      console.log(res);
    })
    .catch((err) => {
      console.log(err);
    });
  res.redirect("/chats");
});

// edit route
app.get("/chats/:id/edit", async (req, res) => {
  let id = req.params.id;
  let chat = await Chat.findById(id);
  res.render("edit.ejs", { chat });
});

// update route

app.put("/chats/:id", async (req, res) => {
  let id = req.params.id;
  let { msg } = req.body;
  let updatedChat =  await Chat.findByIdAndUpdate(
    id,
    { msg: msg },
    {runValidators:true, new:true}
  );
  res.redirect("/chats");
});

// delete route
app.delete("/chats/:id" , async(req,res) =>{
//  let id = req.params.id;
let {id}=req.params;
let deletedChat = await Chat.findByIdAndDelete(id);
res.redirect("/chats");
});

app.get("/", (req, res) => {
  res.send("hello uday");
});

app.listen(3000, () => {
  console.log("server is listening on port 3000");
});
