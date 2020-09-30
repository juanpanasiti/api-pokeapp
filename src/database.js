import mongoose from 'mongoose'
import dotenv from 'dotenv'
import * as logger from './libs/Logger'

dotenv.config()
const db_url = process.env.DB_URL || ""

mongoose.connect(db_url, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex:true
})
.then((db) => {
    logger.success("DB is connected succesfully");
})
.catch((error) => {
    logger.error(error)
})