const sql = require('mssql');
const config = require('../config');
const query= require('./query');


const getContenByIDManga=(req,res)=>{
    const id=req.params.id;
    sql.connect(config,(err)=>{
        if(err){
            console.error(err.message)
            res.status(500).send('fail to connect sql server');
        }else{
            const request=new sql.Request();
            request.query(query.getConten(id),(err,result)=>{
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

const getChapterbyIDManga=(req,res)=>{
    const id=req.params.id;
    sql.connect(config,(err)=>{
        if(err){
            console.error(err.message)
            res.status(500).send('fail to connect sql server');
        }else{
            const request=new sql.Request();
            request.query(query.getChapter(id),(err,result)=>{
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

const updateImageContent = (req, res) => {
    // const id = req.params.id;
    const { ID_CONTENT,ID_IMAGE,M_ID,IMAGE} = req.body;

    sql.connect(config, (err) => {
        if (err) {
            console.error('Failed to connect to SQL Server:', err);
            res.status(500).send('Failed to connect to SQL Server');
        } else {
            const request = new sql.Request();
            request.query(query.updateContentImage(ID_IMAGE,ID_CONTENT,M_ID,IMAGE), (err, result) => {
                if (err) {
                    console.error('Failed to execute query:', err);
                    res.status(500).send('Failed to update manga');
                } else {
                    res.status(200).send('Manga updated successfully');
                }
            });
        }
    });
};



module.exports = {
    getContenByIDManga,
    getChapterbyIDManga,
    updateImageContent
};
