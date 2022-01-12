const express = require('express')
const { dbConnection } = require('./db/config')
require('dotenv').config()

const app = express()

dbConnection()

app.use(express.static('public'))

app.use(express.json())

app.use('/api/auth', require('./routes/auth'))



app.listen(process.env.PORT, ()=> console.log(`Server is running on port ${process.env.PORT}`))