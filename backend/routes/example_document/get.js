const router = require('express').Router()
const ExampleModel = require('../../models/example_model')

router.get('/',
  (req, res) => {
    ExampleModel.find((err, test_data) => {
      if (err) {
        return res.status(400)
      }
      return res.json(test_data)
    })
  }
)

module.exports = router
