const express = require('express')
const cors = require('cors')
const app = express()


app.use(cors())

app.use('/',require('./config/routes'))

app.listen(3001);