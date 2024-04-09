const express = require("express");
const app = express();
const port = 8080;
const path = require("path");

app.use(express.urlencoded({ extended: true }));
app.use(express.json()); 


app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

app.use(express.static(path.join(__dirname, "public")));

let posts = [
  {
    username: "coderroot",
    content: "My favorite website is coderrot ",
  },
  {
    username: "uday",
    content: "Life is short journey enjoy it ",
  },
  {
    username: "rahul",
    content: "I love graphic designing  ",
  },
];

app.get("/", (req, res) => {
  res.send("serving working well!");
});

app.get("/posts" , (req,res) =>{
     res.render("index.ejs" ,{posts});
})


app.get("/posts/new",(req,res)=>{
res.render("new.ejs");
});

app.post("/posts", (req,res)=>{
  let { username, content } = req.body;
 posts.push({username, content});
 res.redirect("/posts");
 

});





app.listen(port, () => {
  console.log("listening to port :8080");
});
