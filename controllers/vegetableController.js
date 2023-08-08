const vegetables = require('../models/vegetables')

// The callback function from the 'index' route
function index (req,res) {
    res.render('vegetables/Index', { vegetables });
}

function show (req,res) {
    res.render('vegetables/Show', { vegetable: vegetables[req.params.indexOfVegetable]})
    // if (vegetable[req.params.indexOfVegetable]){
    //     res.send(vegetable[req.params.indexOfVegetable])
    // }
    // else{
    //     res.send('<h1>Not found</h1>')
    // }
    // res.send(fruits[req.params.indexOfFruit] || '<h1>Not found</h1>');
}

module.exports = {
    index,
    show
}