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
                    res.status(500).send('Failed to execute query',err);
                } else {
                    res.json(result.recordset);
                    console.log(result.recordset)
                }
            })
        }

    })
}

const getCateByIDManga= (req, res) => {
    const id = req.params.id; // Assuming the user ID is passed as a route parameter

    sql.connect(config, (err) => {
        if (err) {
            console.error('Failed to connect to SQL Server:', err);
            res.status(500).send('Failed to connect to SQL Server');
        } else {
            const request = new sql.Request();
            request.query(query.getCateByIDManga(id), (err, result) => {
                if (err) {
                    console.error('Failed to execute query:', err);
                    res.status(500).send('Failed to execute query');
                } else {
                    if (result.recordset.length > 0) {
                        res.status(200).json(result.recordset);
                    } else {
                        res.status(404).send('User not found');
                    }
                }
            });
        }
    });
};




module.exports = {
    getAllcate,
    getCateByIDManga
};
