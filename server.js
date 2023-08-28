const express = require('express')


const app = express()
const PORT = 3000

const fruits = require('./models/fruits')

const jsxEngine = require('jsx-view-engine')

app.set('view engine', 'jsx')
app.engine('jsx', jsxEngine())

app.get('/', (req, res) =>{
    res.send(fruits)
})


/**
 * @path /fruits
 * @method GET
 * @action index
 * @description returns a list of fruits
 */
//action :index
app.get('/fruits', (req, res)=>{
    res.render('Index', {fruits})
})



//create
/**
 * @path /fruits/new
 * @method GET
 * @action show 
 * @description show form to create new fruit
 */

app.get('/fruits/new', (req, res)=> {
    res.render("New")
})














//show
/**
 * @path /fruits/indexOfFruitArray
 * @param /:indexOfFruitArray
 * @method GET
 * @action show 
 * @description return a single fruit
 */
app.get('/fruits/:indexOfFruitsArray', (req, res)=>{
    // const index = req.params.indexOfFruitsArray
    // res.send(fruits[index])
    res.render('Show', {
        fruit: fruits[req.params.indexOfFruitsArray]
    })
})



app.listen(PORT , ()=>{
    console.log(' Server listening on ' + PORT);
})