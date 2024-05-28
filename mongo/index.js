const mongoose = require('mongoose');
// mongoose.connect("mongodb://127.0.0.1:27017/test");
// alternative for upper

main().then((res) =>{
    console.log("connected to db");
})

.catch((err) => console.log(err));

async function main() {
  await mongoose.connect("mongodb://127.0.0.1:27017/test");


// const userSchema = new mongoose.Schema({
//   name: String,
//   email:String,
//   age:Number,
// });
    
const User = mongoose.model("User", userSchema);


// for single user
// const user1 = new User({
//   name: "Rahul",
//   email: "rahul@gmail.com",
//   age: 20,
// });
// const user2 = new User({
//   name: "Rahul",
//   email: "rahul@gmail.com",
//   age: 20,
// });

// user1.save();
// user2.save().then((res) => {
//   console.log(res);
// }) .catch((err) => {
//   console.log(err);
// });

// for multiple user
// User.insertMany([
//   { name: "uday", email: "rautuday75@gmail.com", age: 21 },
//   { name: "shyam", email: "rautshyam75@gmail.com", age: 21 },
//   { name: "ram", email: "rautram75@gmail.com", age: 21 },
// ]).then((res) =>{
//   console.log(res);
// });

// find user
// User.find({age: {$gt:20}}).then((res) =>{
// console.log(res);
//   console.log(res[0].name);
// }).catch((err) => {
//   console.log(err);
// });

// update one user
// User.updateOne({name:"uday"}, {age:22}).then((res) =>{
// console.log(res);
//   console.log(res);
// }).catch((err) => {
//   console.log(err);
// });


// find with update one user
// User.findOneAndUpdate({ name: "uday" }, { age: 2 }, {new:true })
//   .then((res) => {
//     console.log(res);
//     console.log(res);
//   })
//   .catch((err) => {
//     console.log(err);
//   });

// delete user
// User.deleteOne({name:"ram"}).then((res) =>{
//   console.log(res);
// });

// for manyuser
// User.deleteMany({ age:21 }).then((res) => {
//   console.log(res);
// });

User.findByIdAndDelete("6654fef40cd22689f4472f7f").then((res) => {
  console.log(res);
});



  // use `await mongoose.connect('mongodb://user:password@127.0.0.1:27017/test');` if your database has auth enabled
}