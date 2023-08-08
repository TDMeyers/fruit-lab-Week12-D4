const express = require('express');
const router = express.Router();
const meatController = require('../controllers/meatController')
// or
// const { index,show } = require('../controllers/fruitController')

router.get('/', meatController.index)

router.get('/:indexOfMeat', meatController.show)

module.exports = router;