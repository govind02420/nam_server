var express = require("express")
var app = express();
var router = require("./route/dev");

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*"); 
    res.header("Access-Control-Allow-Methods", "GET,PUT,POST,DELETE");// update to match the domain you will make the request from
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
  });


app.use("/dev",router)

app.listen(9098,()=>{
    console.log("server is ruuning..");
    
})