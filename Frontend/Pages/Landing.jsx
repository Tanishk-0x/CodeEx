
import React from 'react'
import './Landing.css'
import logoimg from '../Assets/imgs/logo1.png'
import chakra from '../Assets/imgs/rotate1.png'
import TypingEffect from '../Others/Typing/typing'
import demo from '../Assets/imgs/demovideo.mp4'
import { Link } from 'react-router-dom';

import { FaCode } from "react-icons/fa";
import { VscDebugConsole } from "react-icons/vsc";
import { MdTimeline } from "react-icons/md";
import { LiaCommentsSolid } from "react-icons/lia";
import { RiSpeakAiLine } from "react-icons/ri";
import { FaCheckDouble } from "react-icons/fa";
import { LiaStarHalfSolid } from "react-icons/lia";
import { TbArrowBigUpLinesFilled } from "react-icons/tb";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";



const Landing = () => {

  return (


    <div className='main'>

        <header className='headers'>
            <div className="logo">
                <img src={logoimg} />
            </div>
            <div className="about">
                <img src={chakra} className='rotate'/>
            </div>
        </header>


        <div className="outer">

            <div className="text">
                <div className="content">
                    <span className='tag'> Your All-in-One AI Code Insight Tool </span>
                    <span className='lines'> AI-powered code understanding at your fingertips </span>
                    <span className='desc'>CodeEcho: Instantly understand code with AI-powered explanations
                         and summaries through a clean, intuitive interface, boosting developer productivity.</span>
                    <TypingEffect text="Explain, Summarize, and Elevate Your Code " speed={70} />

                    <div>
                        
                    <Link to='/codeex'>
                        <button className='click'> Explore </button>
                    </Link>
                        
                    </div>
                </div>
            </div>

            <div className="preview">
                <div className="imgs">
                    <video src={demo} autoPlay muted loop />
                </div>
            </div>

        </div>

        <div className="bars">
            <div className="a"><FaCode /><div className="cont">CodeExplain</div></div>
            <div className="b"><VscDebugConsole /><div className="cont">Debug</div></div>
            <div className="c"><MdTimeline /><div className="cont">Complexity</div></div>
            <div className="d"><LiaCommentsSolid /><div className="cont">Comment</div></div>
            <div className="e"><RiSpeakAiLine /><div className="cont">Speech</div></div>
            <div className="f"><FaCheckDouble /><div className="cont">Summarizer</div></div>
            <div className="g"><LiaStarHalfSolid /><div className="cont">Feedback</div></div>
            <div className="h"><TbArrowBigUpLinesFilled /><div className="cont">Optimzation</div></div>
        </div>

        {/* <div className="slide1">
            <div className="slidecontent">
                <div className="codecontent">
                    <TypingEffect text='' speed={40} />
                </div>
                <div className="textitem"></div>
            </div>
        </div>


        <div className="slide1">
            <div className="slidecontent">
                <div className="codecontent"></div>
                <div className="textitem"></div>
            </div>
        </div>  */}


     <section className="hero">
      <div className="hero-text">
        <h1>
          Unlock Your <span className="gradient-text">Code's True</span>
          <br />
          Potential with CodeEcho
        </h1>
        <p>
          CodeEcho is an AI-powered toolkit that explains, debugs, summarizes, and 
          refines your code — making development faster and smarter
        </p>
      </div>
      <div className="hero-code">
        <div className="code-box">
          <pre>
            <code>
{`<!DOCTYPE html>
<html>
  <head><title>Example</title></head>
  <body>
    <h1><a href="/">Header</a></h1>
    <nav>
      <a href="one/">One</a>
      <a href="two/">Two</a>
      <a href="three/">Three</a>
    </nav>
  </body>
</html>`}
            </code>
          </pre>
        </div>
      </div>
    </section>

        <div className="footer">
            <div className="l">Powered by Gemini</div>
            <div className="r">
                <div className="logoss">
                    <Link to='https://github.com/Tanishk-0x' ><FaGithub /></Link>
                    <Link to='https://www.linkedin.com/in/tanishk-namdev' ><FaLinkedin /></Link>
                </div>
            </div>
            <div className="m">Made by @tanishk</div>
        </div>
      
    </div>

  )

}

export default Landing
