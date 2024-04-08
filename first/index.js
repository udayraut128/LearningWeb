const { render } = require("ejs");
const express = require("express");
const app = express();
const path = require("path");
const port = 8080;


 

// error solve
// app.set('view engine','ejs');
// app.get("/",(req, res) =>{

// res.render("home.ejs");
// });



app.set('view engine', 'ejs');
app.set( "views", __dirname + "/views" );
app.get("/", (req, res) =>{

 res.render("home.ejs");
});

app.get("/hello",(req, res) =>{

    res.send("home");
    });

app.get("/rolldice",(req, res) =>{
    // res.render("rolldice.ejs");

    let diceval = Math.floor((Math.random() *6)+1);
    res.render("rolldice.ejs",{ num : diceval});

});

// for ex of instagram username search
app.get("/ig/:username",(req, res) =>{
    const follower = ["uday", "rahul", "satish","chetan", "raunit"];
    let { username } =req.params;
    res.render("instagram.ejs",{username , follower});
});

app.listen(port, () => {

console.log(`listening on port ${port}`);
});