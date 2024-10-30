//query --> passed as parameter in url itself....GENERALLY FOR GET REQUEST.
//syntax....for one parameter.
//      http://localhost:3000/?n=6
//      anything after question (key = value)....no spacing.

//syntax.....for more than one query.
//      http://localhost:3000/?n=6&m=7&name=ayush.
//      this has 3 query.
//      n = 6;
//      m = 7;
//      name = ayush;


const express = require("express");
const app = express();

function fact(n){
    if(n == 1){
        return 1;
    }
    return n * fact(n - 1);
}



//query ko api endpoint m aise show nhi krte h.
app.get('/factorial',function(req,res){
    let {n} = req.query;
    let ans = fact(n);
    res.send("the factorial of " + n + " is " + ans);
})

app.listen(3000);