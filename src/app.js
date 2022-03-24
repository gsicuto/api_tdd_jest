const express = require('express')

const app = express()

// NotFound Handling
app.use(require('./middlewares/notFound.middleware'))

module.exports = app
