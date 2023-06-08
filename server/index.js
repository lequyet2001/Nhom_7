const express = require('express')
const app = express()

// Require the user router
const usersRouter = require('./src/router/users.js');
app.use(express.json())
// Use the user router for the '/users' route
app.use('/users', usersRouter);


app.listen(3000, () => {
  console.log('Server đang chạy trên cổng 3000!!!!')
})


