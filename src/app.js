//Import dependencies
import express from 'express'
import morgan from 'morgan'

//Import Routes
import indexRoutes from './routes/index.routes'

//inits
const app = express()

app.use(express.json())
app.use(morgan('dev'))

//Use routes
const API_V1 = '/api/v1'
app.use(API_V1 + '/', indexRoutes)

export default app