const express = require('express')
const app = express()


//this will extract the json from the body.
//to access the body...we have to do this.
app.use(express.json())


app.post('/',function(req,res){
    //i can excess the body like this. . . (using the DOT oprator.)
    let num1 = req.body.num1;
    let num2 = req.body.num2;
    res.status(200).send("processing... ans is : " + (num1 + num2));
    
})
app.get('/',function(req,res){
    res.status(201).send("hello ayush ... 200 everything is OK")
})
app.listen(3000)