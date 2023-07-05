require('dotenv').config();
module.exports = {
    user: 'sa',
    password: process.env.P,
    server: 'localhost',
    database: process.env.D,
    port: parseInt(process.env.P1) ,
    options: {
      encrypt: true,
      trustServerCertificate: true
    }
  };
  
  