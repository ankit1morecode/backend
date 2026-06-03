const express = require("express");

let app = express();

let arr = [];

app.get("/",(req,res)=>{
    let data = req.body;
    arr.push(data);
    res.render("index.js",{arr});
})


module.exports = app;