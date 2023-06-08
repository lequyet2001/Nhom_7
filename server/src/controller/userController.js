const sql = require('mssql');
const config = require('../config');

// Define a separate function for handling the route logic
const getAllUsers = (req, res) => {
    sql.connect(config, (err) => {
        if (err) {
            console.error('Failed to connect to SQL Server:', err);
            res.status(500).send('Failed to connect to SQL Server');
        } else {
            const request = new sql.Request();
            request.query('select * from [dbo].[user]', (err, result) => {
                if (err) {
                    console.error('Failed to execute query:', err);
                    res.status(500).send('Failed to execute query');
                } else {
                    res.json(result.recordset);
                }
            });
        }
    });
};

const getUser = (req, res) => {
    const userId = req.params.id; // Assuming the user ID is passed as a route parameter

    sql.connect(config, (err) => {
        if (err) {
            console.error('Failed to connect to SQL Server:', err);
            res.status(500).send('Failed to connect to SQL Server');
        } else {
            const request = new sql.Request();
            request.query(`SELECT * FROM [dbo].[user] WHERE U_ID = ${userId}`, (err, result) => {
                if (err) {
                    console.error('Failed to execute query:', err);
                    res.status(500).send('Failed to execute query');
                } else {
                    if (result.recordset.length > 0) {
                        res.status(200).json(result.recordset[0]);
                    } else {
                        res.status(404).send('User not found');
                    }
                }
            });
        }
    });
};


const updateUser = (req, res) => {
    const userId = req.params.id; // Assuming the user ID is passed as a route parameter
    const { pass } = req.body; // Assuming the updated name and email are provided in the request body

    sql.connect(config, (err) => {
        if (err) {
            console.error('Failed to connect to SQL Server:', err);
            res.status(500).send('Failed to connect to SQL Server');
        } else {
            const request = new sql.Request();
            request.query(`UPDATE [dbo].[user] SET PASS = '${pass}' WHERE id = ${userId}`, (err, result) => {
                if (err) {
                    console.error('Failed to execute query:', err);
                    res.status(500).send('Failed to execute query');
                } else {
                    if (result.rowsAffected[0] > 0) {
                        res.send('User updated successfully');
                    } else {
                        res.status(404).send('User not found');
                    }
                }
            });
        }
    });
};

// Export the function
module.exports = {
    getAllUsers,
    getUser,
    updateUser
};



