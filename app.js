const express = require("express");
const path = require("path")
const app = express();

app.get("/", (req, res)=>{
    res.sendFile(path.join(__dirname + "/index.html"))
});

app.listen(4000, ()=>{
    console.log("hello word!  I DO MY FIRST SERVER",4000);
});
//utilizo este puerto por que el 6000 no esta disponible
