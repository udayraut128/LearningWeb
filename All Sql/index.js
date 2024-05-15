 const express = require("express");
 const app = express();
 const port = 3000;
 const path = require("path");

 const { faker } = require("@faker-js/faker");
 const mysql = require("mysql2");

 const connection = mysql.createConnection({
   host: "localhost",
   user: "root",
   database: "myapp",
   password: "UdayRaut@#214125",
 });

 app.set("view engine", "ejs");
 app.set("views", __dirname + "/views");

 // Inserting new data for single user
 // let q = "INSERT INTO user(id, username, email, password) VALUES( ? ,? ,?,?)";
 // let user = ["123", "udayraut128","udayraut128@gmail.com","12345"];

 // try{
 //     connection.query(q,user, (err,result) => {
 //       if(err) throw err;
 //        console.log(result);

 // });

 // }catch(err){
 //     console.log(err);
 // }

 // Inserting new data for multiple user
 // let q = "INSERT INTO user(id, username, email, password) VALUES ?";
 // let users = [
 //   ["124", "satishraut128", "satishraut128@gmail.com", "1234455"],
 //   ["125", "rahulraut128", "rahulraut128@gmail.com", "1234545"],
 // ];

 // try{
 //     connection.query(q,[users], (err,result) => {
 //       if(err) throw err;
 //        console.log(result);

 // });

 // }catch(err){
 //     console.log(err);
 // }

 // connection.end();

 // let getRandomUser= () =>{
 //   return {
 //     id: faker.string.uuid(),
 //     username: faker.internet.userName(),
 //     email: faker.internet.email(),
 //     password: faker.internet.password(),

 //   };
 // }

 // Generate 100 of fake users random  data and insert into the database
 //  let getRandomUser = () => {
 //    return [
 //      faker.datatype.uuid(),
 //      faker.internet.userName(),
 //      faker.internet.email(),
 //      faker.internet.password(),
 //    ];
 //  };
 // let q = "INSERT INTO user(id, username, email, password) VALUES ?";
 //  let data=[];

 //  for(let i=1;i<100;i++){
 //   data.push(getRandomUser());
 //  }

 // try {
 //   connection.query(q, [data], (err, result) => {
 //     if (err) throw err;
 //     console.log(result);
 //   });
 // } catch (err) {
 //   console.log(err);
 // }

 // connection.end();

 // home router
 app.get("/", (req, res) => {
   let q = "SELECT count(*) FROM user";
   try {
     connection.query(q, (err, result) => {
       if (err) throw err;
       // console.log(result);
       let count = result[0]["count(*)"];
       res.render("home.ejs", { count });
     });
   } catch (err) {
     console.log(err);
     res.send("Some error in DataBase");
   }
 });

//  user 
 app.get("/user", (req, res) => {
   let q = `SELECT * FROM user`;
   try {
     connection.query(q, (err, users) => {
       if (err) throw err;
       res.render("showusers.ejs", { users });
     });
   } catch (err) {
     console.log(err);
     res.send("Some error in DataBase");
   }
 });

// edit route
app.get("/user/:id/edit", (req,res) => {
  let {id}=req.params;
res.render("edit.ejs");
});


 app.listen("3000", () => {
   console.log("server is listenting to port  3000");
 });