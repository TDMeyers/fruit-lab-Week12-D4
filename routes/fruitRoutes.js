const express = require('express');
const router = express.Router();
const fruitController = require('../controllers/fruitController')
// or
// const { index,show } = require('../controllers/fruitController')

// I.N.D.U.C.E.S (Index, New, Delete, Update, Create, Edit, Show)

router.get('/', fruitController.index)

router.get('/new', fruitController.newFruit)

router.delete('/:indexOfFruit', fruitController.destroy)

router.put('/:indexOfFruit', fruitController.update)

router.post('/', fruitController.create)

router.get('/:indexOfFruit/edit', fruitController.edit)

router.get('/:indexOfFruit', fruitController.show)

module.exports = router;