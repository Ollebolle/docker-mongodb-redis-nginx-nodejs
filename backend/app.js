const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')
const morgan = require('morgan')
const swStats = require('swagger-stats')
const app = express()

app.use(swStats.getMiddleware({}))
app.use(morgan('dev'))

app.use(cors({ preflightContinue: true }))
app.options('*', cors())

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))

// MongoDB Connection
const mongoose = require('mongoose')
const db = mongoose.connection

mongoose.connect('mongodb://mongodb')

db.on('error', console.error.bind(console, 'connection error:'))
db.once('open', () => {
  console.log('\x1b[34m', 'MongoDB Database connected')
})

// Health endpoint
const health = require('./routes/health')

app.use('/health', health)

// Example mongodb document endpoints
const mongo_get = require('./routes/example_document/get')
const mongo_post = require('./routes/example_document/post')

app.use('/example', mongo_get)
app.use('/example', mongo_post)

// catch 404 and forward to error handler
app.use((req, res, next) => {
  const err = new Error('Not Found')

  err.status = 404
  next(err)
})

app.listen(process.env.PORT, () => {
  console.log('\x1b[32m', 'Server - up & running on port ${ process.env.PORT }!')
})

module.exports = app
