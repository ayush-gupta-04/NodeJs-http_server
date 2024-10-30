//path -> '/user/:userid'   ----> data after colon is param.

const express = require("express");
const app = express();



//parameter ko api endpoint ke url m aise show krte h.
app.get('/user/:userid',function(req,res){
    let id = req.params;
    res.send("id is : " + id);
})

app.listen(3000);