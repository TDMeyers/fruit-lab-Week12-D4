const fruits = require('../models/fruits')

// The callback function from the 'index' route
function index (req,res) {
    res.render('fruits/Index', { fruits });
}

function show (req,res) {
    res.render('fruits/Show', { fruit: fruits[req.params.indexOfFruit]})
    // if (fruits[req.params.indexOfFruit]){
    //     res.render('fruits/Show', { fruit: fruits[req.params.indexOfFruit]})
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