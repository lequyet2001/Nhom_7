require('dotenv').config();
module.exports = {
    user: 'sa',
    password: process.env.PASSWORD,
    server: process.env.SERVER,
    database: process.env.DATABASE,
    port: process.env.PORT,
    options: {
      encrypt: true,
      trustServerCertificate: true
    }
  };
  
  