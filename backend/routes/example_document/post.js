const router = require('express').Router()
const ExampleModel = require('../../models/example_model')

router.post('/', (req, res, next) => {
  const body = req.body
  const example = new ExampleModel(body)

  example.save((err) => {
    if (err) {
      console.log(err.stack)
    }
    return res.json(example)
  })

})

module.exports = router
