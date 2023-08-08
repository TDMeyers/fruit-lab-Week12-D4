const express = require('express');
const router = express.Router();
const vegetableController = require('../controllers/vegetableController')
// or
// const { index,show } = require('../controllers/fruitController')

router.get('/', vegetableController.index)

router.get('/:indexOfVegetable', vegetableController.show)

module.exports = router;