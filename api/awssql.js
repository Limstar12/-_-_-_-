var express = require('express')
var mysql = require('mysql')
var dbconfig = require('../db/dbconfig')
var mybatisMapper = require('mybatis-mapper')


var router = express.Router();
var pool = mysql.createPool(dbconfig); 



router.use(express.json())

mybatisMapper.createMapper(['./mapper/introduceSql.xml'])

var format = { language : 'sql', indent: '   '} 

router.post('/', (req, res, next) => {
    var params = req.body; //json
    var query = mybatisMapper.getStatement(
        params.mapper, params.mapper_id, params, format);

    pool.getConnection(function(err, connection){

        if(err) console.log("DB접속불가 db정보 확인할 것 : " + err);

        connection.query(query,
            (error, result) =>{
                if(error) throw error; 
                if(req.body.crud == 'select'){
                    res.send(result); 
                }else{
                res.send("succ") 
                }
            })
        connection.release();
    })
})

module.exports = router;