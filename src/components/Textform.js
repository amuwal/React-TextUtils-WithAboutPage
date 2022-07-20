import React, { useState } from 'react';

export default function Textform(props) {
    
    const handleUpClick = () => {
        // console.log("Uppercase was clicked");
        let newText = text.toUpperCase();
        setText(newText)
    }
    
    const handleLowClick = () => {
        // console.log("Uppercase was clicked");
        let newText = text.toLowerCase();
        setText(newText)
    }
    
    const handleClear = () => {
        let newText = "";
        setText(newText)
    }
    
    const handleCopy = event => {
        navigator.clipboard.writeText(text)
        event.currentTarget.classList.remove('btn-primary');
        event.currentTarget.classList.add('btn-dark');
        setCopyStatus("Copied!!")
        setTimeout(() => {
            setCopyStatus("Copy To Clipboard")
        }, 1500);
        // alert("Copied Successfully")

    }
    
    const handleOnChange = (event)=>{
        setText(event.target.value)
    }
    
    const [text, setText] = useState('');
    const [copyStatus, setCopyStatus] = useState('Copy To Clipboard');
    // setText("Your Text here")
  return (
    <div className={`container  border ${props.mainClasses}`} id="main">
     <h1 className={`${props.headingClasses}`} id="heading">{props.heading}</h1>
     {/* <label htmlFor="Text" className="form-label">Enter your text below:</label> */}
     <textarea className={`form-control border ${props.myBoxClasses}`} value={text} onChange={handleOnChange} id="myBox" rows="8"></textarea>
     <button disabled={text.length===0} className="my-3 mx-2 btn btn-dark border border-light" onClick={handleUpClick}>Convert to Uppercase</button>
     <button disabled={text.length===0} className="my-3 mx-2 btn btn-dark border border-light" onClick={handleLowClick}>Convert to Lowercase</button>
     <button disabled={text.length===0} className="my-3 mx-2 btn btn-dark border border-light" onClick={handleClear}>Clear Area</button>
     <button disabled={text.length===0} className="my-3 mx-2 btn btn-dark border border-light" onClick={handleCopy}>{copyStatus}</button>
     <h1 className='text-warning'>Your Text Summary:</h1>
     <p id="summary" className={`${props.summaryClasses}`}>{text.split(/\s+/).filter((element)=>{return element.length!==0}).length} words and {text.filter((element)=>{return element.length!==0}).length} characters</p>
     <p className={`${props.summaryClasses}`}>{0.008 * text.split(" ").filter((element)=>{return element.length!==0}).length} Minute read </p>
    </div>
  )
}
