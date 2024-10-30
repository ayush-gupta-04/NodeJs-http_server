const express = require("express");
const app = express();
const fs = require("fs");
const path = require('path');



//by this i can see contents of folder1...folder2...folder3 .. 
//by passing names in the params..
app.get('/:files', function (req, res) {
    const pathGiven = req.params.files;
    const dirPath = path.join(__dirname,pathGiven);
    fs.readdir(dirPath, (err, files) => {
    if (err) {
        return res.status(500).send({ error: 'Failed to retrieve files' });
    }
    res.json(files);
    });
});
app.listen(3000);

