const meats = require('../models/meats')

// The callback function from the 'index' route

// GET  /meats
function index (req,res) {
    res.render('meats/Index', { meats });
}

// GET  /meats/:indexOfMeat
function show (req,res) {
    if (meats[req.params.indexOfMeat]){
        res.render('meats/Show', { meat: meats[req.params.indexOfMeat], index: req.params.indexOfMeat})
    } else {
        res.redirect('/meats');
    }
    // if (meats[req.params.indexOfMeat]){
    //     res.render('meats/Show', { Meat: meats[req.params.indexOfMeat]})
    // }
    // else{
    //     res.send('<h1>Not found</h1>')
    // }
    // res.send(meats[req.params.indexOfMeat] || '<h1>Not found</h1>');
}

// GET  /meats/new
function newMeat (req,res){
    res.render('meats/New')
}

// GET  /meats/:indexOfMeat/edit
function edit (req,res){
    res.render('meats/Edit', { meat: meats[req.params.indexOfMeat], index:req.params.indexOfMeat })
}

// POST  /meats
function create(req,res){
    if (req.body.readyToEat === 'on'){
        req.body.readyToEat = true;
    }
    else {
        req.body.readyToEat = false;
    }
    meats.push(req.body)
    res.redirect('/meats')
}

// DELETE  /meats/:indexOfMeat
function destroy(req,res){
    console.log('DELETE  /meats/:indexOfMeat')
    // meats.findIndex((Meat,index) => index == req.params.indexOfMeat)
    let index = Number(req.params.indexOfMeat)
    meats.splice(index, 1)
    res.redirect('/meats')
}


// PUT  /meats/:indexOfMeat
function update(req,res){
    console.log('PUT  /meats/:indexOfMeat')
    
    if (req.body.readyToEat === 'on'){
        req.body.readyToEat = true;
    }
    else {
        req.body.readyToEat = false;
    }

    meats[req.params.indexOfMeat] = req.body

    res.redirect('/meats')
}

module.exports = {
    index,
    show,
    newMeat,
    create,
    destroy,
    edit,
    update
}