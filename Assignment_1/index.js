const express = require("express");
const app = express();
const fs = require("fs");
app.get('/files',(req,res) => {

})




//i had to do it for every file .... messy h ye..
//there got to be another way.
//a general way.
app.get('/file/file1.txt',function(req,res){
    fs.readFile("file1.txt",function(err,data){
        if(data == ""){
            res.status(404).send("FILE NOT FOUND");
        }else{
            res.send(data);
        }
    })
})
app.get('/file/file2.txt',function(req,res){
    fs.readFile("file2.txt",function(err,data){
        if(data == ""){
            res.status(404).send("FILE NOT FOUND");
        }else{
            res.send(data);
        }
    })
})
app.get('/file/file3.txt',function(req,res){
    fs.readFile("file3.txt",function(err,data){
        if(data == ""){
            res.status(404).send("FILE NOT FOUND");
        }else{
            res.send(data);
        }
    })
})
app.listen(3000);