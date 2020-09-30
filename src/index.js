import app from './app'
import './database'
import dotenv from 'dotenv'
import * as logger from './libs/Logger'
dotenv.config()

const port = process.env.PORT || 3000
const api_name = process.env.API_NAME || "API"
app.listen(port)
logger.success(`${api_name}'s Server listen on port ${port}`)