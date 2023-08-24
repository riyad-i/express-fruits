const express = require('express')


const app = express()
const PORT = 3000

const fruits = require('./models/fruits')


app.get('/', (req, res) =>{
    res.send(fruits)
})


/**
 * @path 
 * 
 */
//action :index
app.get('/fruits', (req, res)=>{
    res.send(fruits)
})


//show
app.get('/fruits/:indexOfFruitsArray', (req, res)=>{
    const index = req.params.indexOfFruitsArray
    res.send(fruits[index])
})



app.listen(PORT , ()=>{
    console.log(' Server listening on ' + PORT);
})