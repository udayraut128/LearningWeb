const express = require("express");
const app = express();
const mongoose = require("mongoose");
const Listing = require("./models/listing.js");
const path = require("path");


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

app.set("view engine", "ejs");
app.set("views",path.join(__dirname,"views"));



app.get("/", (req,res) =>{
    res.send("Hello World");
});


// app.get("/testListing", async (req,res) =>{
    // let sampleListing = new Listing({
    //     title:"My New Villa",
    //     description:"This is a beautiful villa in the heart of the city",
    //     price: 100000,
    //     location: "Delhi",
    //     country:"India",
    // });
    // await sampleListing.save();
    // console.log(sampleListing);
    // res.send("save hello sucessfully");
// });


app.get("/listings", async (req,res) =>{
    const allListings = await Listing.find({});
    res.render("index.ejs",{allListings});
});



app.listen(3000, ()=>{
    console.log("server start");
});