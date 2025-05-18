// Business Logic ... 

const aiService = require('../services/ai.service') ; 


const getResponse = async (req , res) => {

    const code = req.body.code ; 
    const instruction = req.body.instruction ; 


    if(!code){
        return res.status(400).send("Input is required!") ; 
    }

    const response = await aiService( code , instruction ) ; 

    res.send(response) ; 

}


module.exports = { getResponse } ; 