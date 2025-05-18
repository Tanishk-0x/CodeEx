// First File That Executes ... 

require('dotenv').config() ; 
const app = require('./src/app') ; 


const PORT = 5000 ; 


app.listen(PORT , () => {
    console.log(`Server Started SuccessFully At Port No : ${PORT} `) ; 
})