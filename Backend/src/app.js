// Default Route / Express instance ... 

const express = require('express') ; 
const aiRoutes = require('../src/routes/ai.route')  ; 
const cors = require('cors') ; 

const app = express() ; 

app.use(express.json()) ; 

app.use(cors()) ; 


app.get('/' , (req , res) => {
    res.send('Hello World!')
}) ; 


app.use('/ai' , aiRoutes) ; // mounting 


module.exports = app ; 

