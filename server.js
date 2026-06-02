let express = require("express");

let app = express();

app.get('/',(req,res)=>{
    res.send("server is responding to root path");
})

app.get('/try',(req,res)=>{
    res.send("try path is also working..");
})

app.listen(3000,()=>{
    console.log("app is listening on port 3000");
})