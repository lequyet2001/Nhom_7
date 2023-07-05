const sql = require('mssql');
const config = require('../config');
const query= require('./query');


const getAllcate=(req,res)=>{
    sql.connect(config,(err)=>{
        if(err){
            console.error(err.message)
            res.status(500).send('fail to connect sql server');
        }else{
            const request=new sql.Request();
            request.query(query.getAllCate(),(err,result)=>{
                if(err){
                    console.error('Failed to execute query:', err);
                    res.status(500).send('Failed to execute query');
                } else {
                    res.json(result.recordset);
                    console.log(result.recordset)
                }
            })
        }

    })
}





module.exports = {
    getAllcate
};
