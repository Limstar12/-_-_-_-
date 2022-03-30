var express = require('express');
var router = express.Router();

router.get('/', (req,res,next) => {
    res.send('라우터 처리')
})

module.exports=router;