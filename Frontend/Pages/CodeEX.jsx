import './CodeEx.css';
import prism from "prismjs";
import "prismjs/themes/prism-tomorrow.css";
import { useState, useEffect } from 'react';
import Editor from 'react-simple-code-editor';
import axios from 'axios';
import Markdown from 'react-markdown';
import Spinner from '../Others/Loader/Spinner';
import TypingEffect from '../Others/Typing/typing';

import { FaCode } from "react-icons/fa";
import { VscDebugConsole } from "react-icons/vsc";
import { MdTimeline } from "react-icons/md";
import { LiaCommentsSolid } from "react-icons/lia";
import { FaCheckDouble } from "react-icons/fa";
import { RiSpeakAiLine } from "react-icons/ri";
import { LiaStarHalfSolid } from "react-icons/lia";
import { TbArrowBigUpLinesFilled } from "react-icons/tb";


import { PROMPTS } from '../Instructions/Prompt';


function CodeEX() {

  const Handlers = [
    handleInstruction1 , 
    handleInstruction2 , 
    handleInstruction3 , 
    handleInstruction4 , 
    handleInstruction5 ,
    handleInstruction6 , 
    handleInstruction7 , 
    handleInstruction8 ,
  ]

  ////^---------------------- BUTTON ---------------------------------

  const [activeIndex, setActiveIndex] = useState(null); // Track the active button

  const buttons = [
    <FaCode />,
    <VscDebugConsole />,
    <MdTimeline />,
    <LiaCommentsSolid />,
    <FaCheckDouble />,
    <LiaStarHalfSolid />,
    <TbArrowBigUpLinesFilled />,
    <RiSpeakAiLine />,
  ];

  ////^-------------------------------------------------------------


  ////^-------------------- USESTATE ---------------------------

  const [code, setcode] = useState(`
  function sum () {
    return a + b ;
  }`
    );

  const [review, setReview] = useState("");
  const [loading, setLoading] = useState(false);


  ////^ -----------------------------------------------------------


  ////^-------------------- INSTRUCTIONS ---------------------------
  //~---------------------------------------------------------------
 
  const [ instruction , setInstruction ] = useState('') ; 

    function handleInstruction1 () {
      const Parameter = PROMPTS.CodeExplain ; 
      setInstruction(Parameter) ; 
      fetchData(Parameter) ;
      console.log( "Instruction : CodeExplain") ;  
    }

    function handleInstruction2 () {
      const Parameter = PROMPTS.Debug ; 
      setInstruction(Parameter) ; 
      fetchData(Parameter) ; 
      console.log( "Instruction : Debug") ; 
    }

    function handleInstruction3 () {
      const Parameter = PROMPTS.Complexity ; 
      setInstruction(Parameter) ; 
      fetchData(Parameter) ;
      console.log( "Instruction : Complexity") ;
    }

    function handleInstruction4 () {
      const Parameter = PROMPTS.CommentGenerator ; 
      setInstruction(Parameter) ; 
      fetchData(Parameter) ;
      console.log( "Instruction : CommentGenerator") ;
    }

    function handleInstruction5 () {
      const Parameter = PROMPTS.Summarizer ; 
      setInstruction(Parameter) ; 
      fetchData(Parameter) ;
      console.log( "Instruction : Summarizer") ;
    }

    function handleInstruction6 () {
      const Parameter = PROMPTS.Rating ; 
      setInstruction(Parameter) ; 
      fetchData(Parameter) ;
      console.log( "Instruction : Rating") ;
    }

    function handleInstruction7 () {
      const Parameter = PROMPTS.Optimizer ; 
      setInstruction(Parameter) ; 
      fetchData(Parameter) ;
      console.log( "Instruction : Optimzer"  ) ;
    }

    function handleInstruction8 () {
      console.log("Speech recognization !") ; 
    }
    

    //~ ------------------------------------------------------------
    ////^ -----------------------------------------------------------


  useEffect(() => {
    prism.highlightAll();
  });

  ////^ --------------------API CALLING FUNCTION --------------------

  async function fetchData(currentInstruction) {
    setLoading(true);
    const response = await axios.post('http://localhost:5000/ai/get-response', { code , instruction : currentInstruction  });
    setReview(response.data);
    setLoading(false);
  }

  ////^ -----------------------------------------------------------


  return (

    <div id='main'>

      <header className="header">
          <div className="title">
            <TypingEffect id="title" text='CodeEcho' speed={80} />
          </div>


          <div className="button-group">

            <div className="load">
              {loading ? <Spinner /> : ""}
            </div>

            {buttons.map((label, index) => (
              <button
                key={index}
                className={activeIndex === index ? 'active-btn' : 'inactive-btn'}
                onClick={() => {
                  setActiveIndex(index) , 
                  Handlers[index]() ;  
                }}
              >
                {label}
              </button>
            ))}
          </div>
      </header>

      <div className="container">
        <div className="left">
          <div className="code">
            <Editor 
              value={code}
              onValueChange={code => setcode(code)}
              highlight={code => prism.highlight(code, prism.languages.javascript, "javascript")}
              padding={10}
              style={{
                fontFamily: '"Fira code", "Fira mono", monospace',
                fontSize: 18,
                border: "1px solid #ddd",
                borderRadius: "5px",
                height: "100%",
                width: "100%",
                overflow: "scroll",
              }}
            />
          </div>
        </div>

        <div className="right">
          {/* <Markdown>{review}</Markdown> */}
          <Markdown>{String(review)}</Markdown>
        </div>
      </div>
    </div>
  );
}

export default CodeEX;