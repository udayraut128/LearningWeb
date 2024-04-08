const { render } = require("ejs");
const express = require("express");
const app = express();
const path = require("path");
const port = 8080;

// this is use for get or use style or js files
// app.use(express.static("public"));

// another way to write 
// app.use(express.static(path.join(__dirname, "public")));

// this is use when we make folder in public folder
app.use(express.static(path.join(__dirname, "public/css")));
app.use(express.static(path.join(__dirname, "public/js")));

app.set('view engine', 'ejs');
app.set( "views", __dirname + "/views" );
app.get("/", (req, res) =>{

 res.render("home.ejs");
});

app.get("/hello",(req, res) =>{

    res.send("home");
    });
 

// for ex of instagram username search
app.get("/ig/:username",(req, res) =>{
    let {username}=req.params;
    const instaData = require("./data.json");
     const data = instaData[username];
     res.render("instagram.ejs",{data});
    // res.render("instagram.ejs", {data : instaData[username]});
});

app.listen(port, () => {

console.log(`listening on port ${port}`);
});