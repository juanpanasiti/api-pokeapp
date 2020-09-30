//Import dependencies
import express from 'express'
import morgan from 'morgan'

//Import Routes
//import indexRoutes from './routes/index.routes'

//inits
const app = express()

app.use(express.json())
app.use(morgan('dev'))

//Use routes

export default app