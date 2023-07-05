const express = require('express')
const app = express()
require('dotenv').config();
// Require the user router
const usersRouter = require('./src/router/users.js');
const mangaRouter=require('./src/router/manga.js');

app.use(express.json())

// Use the user router for the '/users' route
app.use('/users', usersRouter);
app.use('/',mangaRouter);

app.listen(process.env.P2, () => {
  console.log("Server đang chạy trên cổng 3000!!!!")
})
