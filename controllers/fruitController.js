const fruits = require('../models/fruits')

// The callback function from the 'index' route

// GET  /fruits
function index (req,res) {
    res.render('fruits/Index', { fruits });
}

// GET  /fruits/:indexOfFruit
function show (req,res) {
    if (fruits[req.params.indexOfFruit]){
        res.render('fruits/Show', { fruit: fruits[req.params.indexOfFruit], index: req.params.indexOfFruit})
    } else {
        res.redirect('/fruits');
    }
    // if (fruits[req.params.indexOfFruit]){
    //     res.render('fruits/Show', { fruit: fruits[req.params.indexOfFruit]})
    // }
    // else{
    //     res.send('<h1>Not found</h1>')
    // }
    // res.send(fruits[req.params.indexOfFruit] || '<h1>Not found</h1>');
}

// GET  /fruits/new
function newFruit (req,res){
    res.render('fruits/New')
}

// GET  /fruits/:indexOfFruit/edit
function edit (req,res){
    res.render('fruits/Edit', { fruit: fruits[req.params.indexOfFruit], index:req.params.indexOfFruit })
}

// POST  /fruits
function create(req,res){
    if (req.body.readyToEat === 'on'){
        req.body.readyToEat = true;
    }
    else {
        req.body.readyToEat = false;
    }
    fruits.push(req.body)
    res.redirect('/fruits')
}

// DELETE  /fruits/:indexOfFruit
function destroy(req,res){
    console.log('DELETE  /fruits/:indexOfFruit')
    // fruits.findIndex((fruit,index) => index == req.params.indexOfFruit)
    let index = Number(req.params.indexOfFruit)
    fruits.splice(index, 1)
    res.redirect('/fruits')
}


// PUT  /fruits/:indexOfFruit
function update(req,res){
    console.log('PUT  /fruits/:indexOfFruit')
    
    if (req.body.readyToEat === 'on'){
        req.body.readyToEat = true;
    }
    else {
        req.body.readyToEat = false;
    }

    fruits[req.params.indexOfFruit] = req.body

    res.redirect('/fruits')
}

module.exports = {
    index,
    show,
    newFruit,
    create,
    destroy,
    edit,
    update
}