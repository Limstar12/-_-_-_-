var express = require('express')
var mysql = require('mysql')
var dbconfig = require('../db/dbconfig')
var mybatisMapper = require('mybatis-mapper')

var router = express.Router();
var pool = mysql.createPool(dbconfig); 


router.use(express.json())
mybatisMapper.createMapper(['./mapper/introduceSql.xml'])

var format = { language : 'sql', indent: '   '} 

router.get('/', (req, res, next) => {
    var params = req.body;
    var query = mybatisMapper.getStatement(
        params.mapper, params.mapper_id, params, format);
   
    pool.getConnection(function(err, connection){
        connection.query(query,
            (error, result) =>{
                if(error) throw error;
                res.send(result)
            })
        connection.release();
    })
})

module.exports = router;