const express = require('express');
const app = express();
const PORT = 3000;
const fruitRoutes = require('./routes/fruitRoutes')
const meatRoutes = require('./routes/meatRoutes')
const vegetableRoutes = require('./routes/vegetableRoutes')
const jsxEngine = require('jsx-view-engine')

app.set('view engine', 'jsx')

app.engine('jsx', jsxEngine());

// .use is for middlewear
app.use('/fruits', fruitRoutes);
app.use('/meats', meatRoutes);
app.use('/vegetables', vegetableRoutes);

app.get('/', (req,res) => {
    res.send('Hello World!')
})

app.listen(PORT, () => {
    console.log(`Listening on port: ${PORT}`);
})


/*
    Create a route for using queries (req.query) to filter
    and send back specific data

    HINT: use .filter, and .includes
*/

























// app.get('/fruits/filter',(req,res) => {
//     let filteredArray = fruits.filter((fruit)=>{
//         // if (req.query.name && req.query.color && req.query.readyToEat && fruit.name.includes(req.query.name) && fruit.color.includes(req.query.color) && fruit.readyToEat.toString()==req.query.readyToEat) {
//         //     console.log('1')
//         //     return true
//         // }
//         if (req.query.name && fruit.name.includes(req.query.name)){
//             console.log('2')
//             return true
//         }
//         if (req.query.color && fruit.color.includes(req.query.color)){
//             return true
//         }
//         if (req.query.readyToEat && fruit.readyToEat.toString()==req.query.readyToEat){
//             return true
//         }
//         })
//         // console.log(req.query.readyToEat==fruits[0].readyToEat.toString(),'-----')
//         res.send(filteredArray)
// })