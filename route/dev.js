var express = require("express")
var router = express();
var mysql = require("mysql")
var connection = mysql.createConnection({
    host:"192.168.0.104",
    database:"devops",
    user:"root",
    password:"root",
    port:9090
})

connection.connect();
router.use(express.json());

router.get("/",(request,response)=>{
    var sql = `select * from dev`
    connection.query(sql,(err,reuslt)=>{
        if(err == null)
        {
            response.send(JSON.stringify(reuslt));
        }
        else
        {
            response.send(JSON.stringify(err));
        }
    });
});
router.post("/",(request,response)=>{
    var sql = `insert into dev values(${request.body.id},'${request.body.name}','${request.body.email}')`
    console.log(sql);
    
    connection.query(sql,(err,reuslt)=>{
        if(err == null)
        {
            response.send(JSON.stringify(reuslt));
        }
        else
        {
            response.send(JSON.stringify(err));
        }
    });
});
router.put("/:id",(request,response)=>{
    var sql = `update dev set name='${request.body.name}',email='${request.body.email}' where id=${request.params.id}`
    connection.query(sql,(err,reuslt)=>{
        if(err == null)
        {
            response.send(JSON.stringify(reuslt));
        }
        else
        {
            response.send(JSON.stringify(err));
        }
    });
});
router.delete("/:id",(request,response)=>{
    var sql = `delete from dev where id = ${request.params.id}`
    connection.query(sql,(err,reuslt)=>{
        if(err == null)
        {
            response.send(JSON.stringify(reuslt));
        }
        else
        {
            response.send(JSON.stringify(err));
        }
    });
});
router.get("/:id",(request,response)=>{
    var sql = `select * from dev where id=${request.params.id}`
    connection.query(sql,(err,reuslt)=>{
        if(err == null)
        {
            response.send(JSON.stringify(reuslt));
        }
        else
        {
            response.send(JSON.stringify(err));
        }
    });
});
module.exports = router 