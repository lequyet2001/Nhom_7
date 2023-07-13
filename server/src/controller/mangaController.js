const sql = require('mssql');
const config = require('../config');
const query = require('./query');

const getAllManga = (req, res) => {
    sql.connect(config, (err) => {
        if (err) {
            console.error(err.message)
            res.status(500).send('fail to connect sql server');
        } else {
            const request = new sql.Request();
            request.query(query.getTopManga(), (err, result) => {
                if (err) {
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


const getAllMangabyID = (req, res) => {
    const id = req.params.id;
    sql.connect(config, (err) => {
        if (err) {
            console.error(err.message)
            res.status(500).send('fail to connect sql server');
        } else {
            const request = new sql.Request();
            request.query(query.getAllMangaByID(id), (err, result) => {
                if (err) {
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

const getAllMangaByIDCate = (req, res) => {
    const id = req.query.id;
    sql.connect(config, (err) => {
        if (err) {
            console.error(err.message)
            res.status(500).send('fail to connect sql server');
        } else {
            const request = new sql.Request();
            request.query(query.getAllMangaByCateID(id), (err, result) => {
                if (err) {
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
    const { MANGA_NAME, AUTHER, MANGA_DESCRIPTION, IMAGE, NHOM_DICH } = req.body;
    console.log(req.body)
    sql.connect(config, (err) => {
        if (err) {
            console.error('Failed to connect to SQL Server:', err);
            res.status(500).send('Failed to connect to SQL Server');
        } else {
            const request = new sql.Request();
            request.query(query.creatManga(MANGA_NAME, AUTHER, MANGA_DESCRIPTION, IMAGE, NHOM_DICH), (err, result) => {
                if (err) {
                    console.error('Failed to execute query:', err);
                    res.status(500).send('Failed to create manga');
                } else {
                    res.status(200).send('User created successfully');
                }
            });
        }
    });
};
const deleteMangaByID = (req, res) => {
    const id = req.params.id;
    sql.connect(config, (err) => {
        if (err) {
            console.error(err.message);
            res.status(500).send('Failed to connect to SQL Server');
        } else {
            const request = new sql.Request();
            request.query(query.deleteMangaByID(id), (err, result) => {
                if (err) {
                    console.error('Failed to execute query:', err);
                    res.status(500).send('Failed to delete manga');
                } else {
                    res.send('Manga deleted successfully');
                }
            });
        }
    });
};

const updateManga = (req, res) => {
    const id = req.params.id;
    const { MANGA_NAME, AUTHOR, MANGA_DESCRIPTION, IMAGE, NHOM_DICH } = req.body;

    sql.connect(config, (err) => {
        if (err) {
            console.error('Failed to connect to SQL Server:', err);
            res.status(500).send('Failed to connect to SQL Server');
        } else {
            const request = new sql.Request();
            request.query(query.updateManga(MANGA_NAME, AUTHOR, MANGA_DESCRIPTION, IMAGE, NHOM_DICH, id), (err, result) => {
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
    createManga,
    getAllManga,
    getAllMangabyID,
    getAllMangaByIDCate,
    deleteMangaByID,
    updateManga,
};
