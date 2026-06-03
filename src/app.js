const express = require("express");
let app = express();
app.use(express.urlencoded({ extended: true }));
const methodOverride = require("method-override");
app.use(methodOverride("_method"));

let arr = [];
app.post("/notes",(req,res)=>{
    let data = req.body;
    if(data.title != "" || data.description!=""){
        let obj = {
        title : data.title,
        description : data.description
    }
        arr.push(obj);
        res.render("index.ejs",{arr});
    }else{
        res.send("Enter title or desctiprion to add the task");
    }
})

app.delete("/delete",(req,res)=>{
    arr.pop();
    res.render("index.ejs",{arr});
})

app.get("/",(req,res)=>{
    res.render("index.ejs",{arr});
})

module.exports = app;