
const express = require("express");
require('dotenv').config()

const app = express();

const port = process.env.PORT || 5000;

app.get("/1234", (req,res)=> {
    res.send("Get all contacts");
});

app.post("/signup", (req,res) => {
    // let {username,email,pwd}=req.body;
    // res.send({
    //     "message": "success",
    //     "username": username,
    //     "email": email,
    //     "pwd": pwd
    // })
    console.log(req.body.username)
})

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});