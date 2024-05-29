const mongoose = require('mongoose');
 

main().then((res) =>{
    console.log("connected to db");
})

.catch((err) => console.log(err));

async function main() {
  await mongoose.connect("mongodb://127.0.0.1:27017/amazon");
}

const bookSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
    maxLength:20,
  },
  author: {
    type: String,
  },
  price: {
    type: Number,
    min:[1,"Price is too low"],
  },
  disscount: {
    type: Number,
    default: 0,
  },
  category:{
    type:String,
    enum:["fiction","non-fiction"],
  },
});

const Book = mongoose.model("Book",bookSchema);

// const book1 = new Book({
//     title:"The Alchemist",
//     author:"Paulo Coelho",
//     price: 200,
//     category:"fiction",
// });

// book1.save().then((res) =>{
//     console.log(res);

// }).catch(err=>{
//     console.log(err)

// });


Book.findByIdAndUpdate("6655249210ed3ca77fd29ea2",{price:-100} ,{runValidators:true})
.then((res) =>{
    console.log(res);
})
.catch((err) => {
    console.log(err.errors.price.properties.message);
});