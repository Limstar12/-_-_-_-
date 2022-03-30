var express = require('express');
var app = express();

app.get('/', (req,res,next) => {
    res.send('정상출력')
})

app.listen(5000,() => {
    console.log('콘솔도 정상 출력')
})

