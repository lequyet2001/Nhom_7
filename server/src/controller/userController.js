const sql = require('mssql');
const config = require('../config');
const query= require('./query')
// Define a separate function for handling the route logic
const getAllUsers = (req, res) => {
    sql.connect(config, (err) => {
        if (err) {
            console.error('Failed to connect to SQL Server:', err);
            res.status(500).send('Failed to connect to SQL Server');
        } else {
            const request = new sql.Request();
            request.query(query.getAllUser(), (err, result) => {
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
            request.query(query.getUser(userId), (err, result) => {
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
            request.query(query.updateUser(pass,userId), (err, result) => {
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

const createUser = (req, res) => {
    const { username, email, pass } = req.body; // Assuming the required user data is provided in the request body
    console.log(req.body)
    // Perform validation or data sanitization if needed

    // Add the logic to create a new user in the database
    // For example, you can use the `request.query()` method to execute an SQL INSERT statement

    // Example code to execute an INSERT statement
   

    sql.connect(config, (err) => {
        if (err) {
            console.error('Failed to connect to SQL Server:', err);
            res.status(500).send('Failed to connect to SQL Server');
        } else {
            const request = new sql.Request();
            request.query(query.createuser(username,email,pass), (err, result) => {
                if (err) {
                    console.error('Failed to execute query:', err);
                    res.status(500).send('Failed to create user');
                } else {
                    res.send('User created successfully');
                }
            });
        }
    });
};

const updateBan = (req, res) => {
    const userId = req.params.id; // Assuming the user ID is passed as a route parameter
    const { USER_STATE_BAN } = req.body; // Assuming the updated name and email are provided in the request body

    sql.connect(config, (err) => {
        if (err) {
            console.error('Failed to connect to SQL Server:', err);
            res.status(500).send('Failed to connect to SQL Server');
        } else {
            const request = new sql.Request();
            request.query(query.updateBan(USER_STATE_BAN,userId), (err, result) => {
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

const deleteUser = (req, res) => {
    const userId = req.params.id;
        sql.connect(config, (err) => {
          if (err) {
            console.error('Failed to connect to SQL Server:', err);
            res.status(500).send('Failed to connect to SQL Server');
          } else {
            const request = new sql.Request();
            request.query(query.deleteUser(userId), (err, result) => {
              if (err) {
                console.error('Failed to execute query:', err);
                res.status(500).send('Failed to delete user');
              } else {
                res.status(200).send('User deleted successfully');
              }
            });
          }
       
      });
      
}

// Export the function
module.exports = {
    createUser,
    getAllUsers,
    getUser,
    updateUser,
    updateBan,
    deleteUser
};


