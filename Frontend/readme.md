import './CodeEX.css'
import prism from "prismjs"
import "prismjs/themes/prism-tomorrow.css"
import { useState , useEffect } from 'react'
import Editor from 'react-simple-code-editor'
import axios from 'axios'
import Markdown from 'react-markdown'
import Spinner from '../Others/Loader/Spinner'
import TypingEffect from '../Others/Typing/typing'

function CodeEX() {

  //^ --------------------------------------------------
  const [code , setcode] = useState(`function sum () {
      return a + b ; 
  }`)

  const [review , setReview] = useState(``) ; 

  const [loading , setLoading] = useState(false) ; 
  //^ --------------------------------------------------


  useEffect(() => {
    prism.highlightAll() ; 
  })
  
  //!---------- function to get data from backend ----------
  //^-------------------------------------------------------
    async function fetchData() {

      setLoading(true) ; 

      //~--- API CALLING ---
      const response = await axios.post('http://localhost:5000/ai/get-response' , { code } ) ; 
      // console.log(response.data) ; 

      //~--- SHOWING THE RESPONSE ---
      setReview(response.data) ; 

      setLoading(false) ; 

    }
    
  //^--------------------------------------------------------
  //!--------------------------------------------------------


  return (

    <div id='main'>

      <header className="header">
        <div className="title">
            <TypingEffect text='CodeEcho' speed={80} /> 
        </div>
        <div className="review">
          {/* //^ --- Calling the function --- */}
          <button className='btn'
          onClick={fetchData}
          >
            {
                (loading) ? <Spinner/> : 'Explain'
            }
          </button>
        </div>
      </header>

      <div className="container">

          <div className="left">
            {/* //^ ----- Input Field ------ */}
            <div className="code">
              <Editor value={code}
              onValueChange={code => setcode(code) }
              highlight={code => prism.highlight(code , prism.languages.javascript, "javascript")}
              padding={10}
              style={{
                fontFamily : '"Fira code" , "Fira mono" , mononspace' , 
                fontSize : 18 , 
                border : "1px solid #ddd" , 
                borderRadius : "5px" , 
                height : "100%" , 
                width : "100%" , 
                overflow : "scroll" , 
              }}
              />
            </div>
          </div>


          {/*//^---- Showing the response ---- */}
          <div className="right">
            <Markdown>{review}</Markdown>
          </div>

      </div>

    </div>

  )
}

export default CodeEX
