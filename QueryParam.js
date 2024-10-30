//path -> '/user/:userid?n=4&m=5'   ----> data after colon and before ? is param.
//                                        and data after ? is query

const express = require("express");
const app = express();
const port = 3000;


app.get('/user/:userid',function(req,res){
    let id = req.params;
    let {m,n} = req.query;
    res.json({
        id : id,
        m : m,
        n : n
    })
})

app.listen(port);