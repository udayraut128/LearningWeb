const mongoose = require("mongoose");
const Chat = require("./models/chat.js");

main()
  .then(() => {
    console.log("connection sucessful");
  })
  .catch((err) => {
    console.log(err);
  });

async function main() {
  await mongoose.connect("mongodb://127.0.0.1:27017/whatsapp");
}


let allChats = [
  {
    from: "uday",
    to: "rahul",
    msg: "hello bro how are you",
    created_at: new Date(),
  },
  {
    from: "satish",
    to: "uday",
    msg: "wlecome to my home",
    created_at: new Date(),
  },
  {
    from: "uday",
    to: "satish",
    msg: "thank you ",
    created_at: new Date(),
  },
  {
    from: "rahul",
    to: "satish",
    msg: "hello, satish where are you",
    created_at: new Date(),
  },
  {
    from: "satish",
    to: "rahu;",
    msg: "hello, i am in janakpur",
    created_at: new Date(),
  },
  {
    from: "rahul",
    to: "uday",
    msg: "hello bye",
    created_at: new Date(),
  },
];

Chat.insertMany(allChats);

 