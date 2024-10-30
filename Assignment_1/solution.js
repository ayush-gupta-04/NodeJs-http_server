const express = require("express");
const app = express();
const fs = require("fs");
const path = require('path');



//1. readdir --> err --> shows if no files exist int he current directories.
//           --> files --> it contains all the files in the directory given by as as dirPath.
//           --> it returns an array of strings.
//2. dirPath --> it stores the path of the directory.
//3. __dirname --> a global keyword to store the value of the current directory. 
app.get('/files', function (req, res) {
    const dirPath = __dirname;
    fs.readdir(dirPath, (err, files) => {
    if (err) {
        return res.status(500).send({ error: 'Failed to retrieve files' });
    }
    res.send(files);
    });
});




//"name" variable will take value whatever we send anything after the colon...in the params.
app.get('/file/:fileName',function(req,res){
    const name = req.params.fileName;
    fs.readFile(name,function(err,data){
        if(data == ""){
            res.status(404).send("FILE NOT FOUND");
        }else{
            res.send(data);
        }
    })
})
app.listen(3000);