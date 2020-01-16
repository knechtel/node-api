const express = require('express')
const cors = require('cors')
const app = express()
var bodyParser = require('body-parser');
app.use(cors())
app.use(bodyParser.json());
app.use('/',require('./config/routes'))

app.listen(3001);