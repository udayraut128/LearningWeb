const express = require("express");
const app = express();
const mongoose = require("mongoose");



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





app.get("/", (req,res) =>{
    res.send("Hello World");
});

app.listen(3000, ()=>{
    console.log("server start");
});