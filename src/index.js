//Import dependencies
const express = require('express')
const morgan = require('morgan')
const logger = require('./libs/Logger')
require('dotenv/config')
require('./database')

//inits
const app = express()
app.use(express.json())
app.use(morgan('dev'))

//Use routes
const API_V1 = '/api/v1'

//Server
const port = process.env.PORT || 3000
const api_name = process.env.API_NAME || "API"
app.listen(port)
logger.logSuccess(`${api_name}'s Server listen on port ${port}`)
