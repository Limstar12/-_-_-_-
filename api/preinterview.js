var express = require('express');
var router = express.Router();
var mysql = require('mysql');
var dbconfig = require('../db/dbconfig');
var ccc = mysql.createConnection(dbconfig);

router.get('/', (req,res,next) => {
    ccc.query('SELECT * FROM reactinterview.interview', (error, result) =>{
        if(error) throw error;
        res.send(result)
        })
})

module.exports=router;






