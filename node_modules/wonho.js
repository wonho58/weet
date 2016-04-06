var express=require('express');
var app = express();
app.get('/wonho', function(req, res) {
    console.log(req.ip);
    res.send('hello wonho');
});
app.listen(process.env.PORT);
console.log("웹서버 시작 : http://node-study.wonho58.c9users.io/ :" + process.env.PORT ); 