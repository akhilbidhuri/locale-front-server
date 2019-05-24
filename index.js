const express = require('express')
const cors = require('cors')
const config = require('./config/config')
var servestatic = require('serve-static')

const app = express()
app.use(servestatic(__dirname + "/build"))
app.use(cors)
app.listen(config.port)