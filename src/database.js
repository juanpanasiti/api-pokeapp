const mongoose = require("mongoose");
const logger = require('./libs/Logger')
require("dotenv/config");

const dbURL = process.env.DB_URL || "";

mongoose.connect(dbURL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true
})
.then((db) => {
    logger.logSuccess('DB is connected succefully.')
})
.catch((error) => {
    logger.logError("Something went wrong.. not connection to DB :-(");
})