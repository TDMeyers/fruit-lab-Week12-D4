const express = require('express');
const router = express.Router();
const fruitController = require('../controllers/fruitController')
// or
// const { index,show } = require('../controllers/fruitController')

router.get('/', fruitController.index)

router.get('/:indexOfFruit', fruitController.show)

module.exports = router;