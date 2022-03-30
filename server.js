var express = require('express');
var app = express();
var preinterview = require("./api/preinterview")

app.get('/', (req,res,next) => {
    res.send('정상출력')
})

app.listen(8080,() => {
    console.log('콘솔도 정상 출력')
})


app.use('/preinterview', preinterview)