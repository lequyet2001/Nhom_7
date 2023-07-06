const sql = require('mssql');
const config = require('../config');
const query= require('./query');

const getAllManga=(req,res)=>{
    sql.connect(config,(err)=>{
        if(err){
            console.error(err.message)
            res.status(500).send('fail to connect sql server');
        }else{
            const request=new sql.Request();
            request.query(query.getAllManga(),(err,result)=>{
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


const getAllMangabyID=(req,res)=>{
    const id = req.params.id;
    sql.connect(config,(err)=>{
        if(err){
            console.error(err.message)
            res.status(500).send('fail to connect sql server');
        }else{
            const request=new sql.Request();
            request.query(query.getAllMangaByID(id),(err,result)=>{
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
const createManga = (req, res) => {
    const { MANGA_NAME,AUTHER,MANGA_DESCRIPTION,IMAGE} = req.body; 
    console.log(req.body)
    sql.connect(config, (err) => {
        if (err) {
            console.error('Failed to connect to SQL Server:', err);
            res.status(500).send('Failed to connect to SQL Server');
        } else {
            const request = new sql.Request();
            request.query(query.creatManga(MANGA_NAME,AUTHER,MANGA_DESCRIPTION,IMAGE), (err, result) => {
                if (err) {
                    console.error('Failed to execute query:', err);
                    res.status(500).send('Failed to create manga');
                } else {
                    res.send('User created successfully');
                }
            });
        }
    });
};
module.exports = {
    createManga,
    getAllManga,
    getAllMangabyID
};
