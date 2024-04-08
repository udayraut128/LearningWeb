const express =require("express");
const app = express();
const port = 8080;

 app.use(express.urlencoded({extended:true}));
 app.use(express.json());

app.get("/register", (req, res) => {
    let { text, password } = req.query;
    res.send(`Standard GET response. Welcome ${text}, your password is ${password}!`);
});


app.post("/register",(req,res) =>{
    let { text, password } = req.body;
    res.send(`Standard GET response. Welcome ${text}, your password is ${password}!`);
});





app.listen(port, () => {
    console.log(`listening to port ${port}`);
});