require('dotenv').config();
module.exports = {
    user: 'sa',
    password: process.env.PASSWORD,
    server: 'localhost',
    database: process.env.DATABASE,
    port: parseInt(process.env.PORT) ,
    options: {
      encrypt: true,
      trustServerCertificate: true
    }
  };
  
  