require('dotenv').config()
const express = require('express')
const app = express()

require('./models')

app.listen(process.env.PORT, () => console.log(`App is listening on ${process.env.PORT}`))