var express = require('express');
var nomalpage = require('../rout/normal');
var awssql = require('./awssql')
var routes = express.Router();

routes.use(express.urlencoded({extended : true}))


routes.get('/', (req, res, next) => {
    var sqlsideis = req.query.type;
    if(sqlsideis == 'aws'){
        req.body.mapper = 'introduceSql'
        req.body.crud = 'select'
        req.body.mapper_id = 'interview'
        routes.use('/', awssql)
        next('route')
    }else{ 
        routes.use('/', nomalpage)
        next('route')
    }
})

module.exports=routes;