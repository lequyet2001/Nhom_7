require('dotenv').config();
module.exports = {
    user: 'sa',
    password: process.env.PASSWORD,
    server: process.env.SERVER,
    database: process.env.DATABASE,
    options: {
      encrypt: false,
      trustServerCertificate: true
    }
  };
  