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

let chat1 = new Chat({
  from: "uday",
  to: "sai",
  msg: "hello",
  created_at: new Date(),
});

chat1.save().then((res) => {
  console.log(res);
});
