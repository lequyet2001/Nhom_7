require('dotenv').config();
module.exports = {
    user: 'sa',
    password: process.env.PASSWORD,
    server: process.env.SERVER,
    database: process.env.DATABASE,
    port: parseInt(process.env.PORT) ,
    options: {
      encrypt: true,
      trustServerCertificate: true
    }
  };
  
  