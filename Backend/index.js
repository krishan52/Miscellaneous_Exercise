const express = require("express");
const app = express();
const port = 8080;

app.use(express.urlencoded({extended:true}));
app.use(express.json());


app.get("/register", (req,res) => {
    let { user, password} = req.query;
    // console.log(req.body);
    res.send(`Your form has been submitted in get request. Thanks ${user}`);
});

app.post("/register", (req,res) => {
    let {name, password } = req.body;
    res.send(`Your form has been submitted in post request. Thanks ${name}`);
});

app.listen(port, () => {
    console.log(`listening to port : ${port}`);
});