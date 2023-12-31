const express = require('express')


const app = express()
const PORT = 3000

const fruits = require('./models/fruits')

const jsxEngine = require('jsx-view-engine')


require('dotenv').config()

const mongoose = require('mongoose')
const Fruit = require('./models/fruit.js')


//app config
app.set('view engine', 'jsx')
app.engine('jsx', jsxEngine())




//middleware
app.use((req, res, next)=> {
    console.log(req.method, req.url)
    next()
})


app.use(express.urlencoded({extended:false}))






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
app.get('/fruits', async (req, res)=>{
    // res.render('Index', {fruits})

    //query fruits from db
    const fruitsFromDB = await Fruit.find({})
    console.log(fruitsFromDB);
    res.render('Index', {
        fruits: fruitsFromDB
    })
})



//create
/**
 * @path /fruits/new
 * @method GET
 * @action create 
 * @description show form to create new fruit
 */

app.get('/fruits/new', (req, res)=> {
    res.render("New")
})



//create
/**
 * @path /fruits
 * @method POST
 * @action create 
 * @description create new fruit and redirect user
 */

app.post('/fruits', async (req, res)=>{
    if (req.body.readyToEat === 'on'){
        req.body.readyToEat = true
    } else {
        req.body.readyToEat = false
    }
    // fruits.push(req.body)
    // console.log(req.body)
    try {
        const createdFruit = await Fruit.create(req.body)
        console.log(createdFruit);
    } catch (error) {
        console.log(error);
    }
    res.redirect(`/fruits/`)


})










//show
/**
 * @path /fruits/indexOfFruitArray
 * @param /:indexOfFruitArray
 * @method GET
 * @action show 
 * @description return a single fruit
 */
app.get('/fruits/:id', async (req, res)=>{
    // const index = req.params.id
    // res.send(fruits[index])

    const {id} = req.params

    const fruit = await Fruit.findById(id)
    console.log('Found Fruit --> ', fruit);
    res.render('Show', {
        fruit: fruit
    })
})



//Connect to database
mongoose.connect(process.env.MONGO_URI)
//test connection
mongoose.connection.once('open', ()=> {
    console.log('connected to mongo')
})





app.listen(PORT , ()=>{
    console.log(' Server listening on ' + PORT);
})