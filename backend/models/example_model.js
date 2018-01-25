const mongoose = require('mongoose')

const schema = mongoose.Schema({
  name: String,
  test: String
})

module.exports = mongoose.model('ExampleModel', schema)
