let app = require("./src/app");

app.set("view engine", "ejs");


app.listen(3000,()=>{
    console.log("app is listening on port 3000");
})