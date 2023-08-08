const meats = require('../models/meats')

// The callback function from the 'index' route
function index (req,res) {
    res.render('meats/Index', { meats });
}

function show (req,res) {
    res.render('meats/Show', { meat: meats[req.params.indexOfMeat]})
    // if (meat[req.params.indexOfMeat]){
    //     res.send(meat[req.params.indexOfMeat])
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