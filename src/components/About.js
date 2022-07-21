import React from 'react'

export default function About(props) {
  return (
<div className={`kuro container bg-${props.toggleDark} py-2 my-3`} id="yoyo">
    <div className={`kuro container my-2 bg-${props.toggleDark}`}>
      <div className={`kuro shiro jumbotron p-md-5 text-light rounded bg-${props.toggleDark} border border-${props.toggleLight}`}>
        <div className="col-md-6 px-0 my-3">
          <h1 className={`shiro display-4 font-italic text-${props.toggleLight}`}>We are a text editing web software</h1>
          <p className={`shiro lead my-3 text-${props.toggleLight}`}>Special thanks to <b className='text-warning'>Yorr</b></p>
        </div>
      </div>
    </div>
    <div className="row mb-2">
        <div className="col-md-6">
          <div className={`shiro card flex-md-row mb-4 box-shadow h-md-250 border border-${props.toggleLight} `}>
            <div className={`kuro bg-${props.toggleDark} card-body d-flex flex-column align-items-start`}>
              <strong className="d-inline-block mb-2 text-warning">Convert To Uppercase</strong>

              <p className={`shiro text-${props.toggleLight} card-text mb-auto`}>This tool helps you to convert your text into Uppercase</p>
              <p className='text-secondary' href="/">Backend:</p>
              <p className='text-success'><strong>let newText = text.toUpperCase();</strong></p>
            </div>
          </div>
        </div>

        <div className="col-md-6">
          <div className={`shiro card flex-md-row mb-4 box-shadow h-md-250 border border-${props.toggleLight} `}>
            <div className={`kuro bg-${props.toggleDark} card-body d-flex flex-column align-items-start`}>
              <strong className="d-inline-block mb-2 text-warning">Convert To Lowercase</strong>

              <p className={`shiro text-${props.toggleLight} card-text mb-auto`}>This tool helps you to convert your text into Lowercase</p>
              <p className='text-secondary' href="/">Backend:</p>
              <p className='text-success'><strong>let newText = text.toLowerCase();</strong></p>
            </div>
          </div>
        </div>

        <div className="col-md-6">
          <div className={`shiro card flex-md-row mb-4 box-shadow h-md-250 border border-${props.toggleLight} `}>
            <div className={`kuro bg-${props.toggleDark} card-body d-flex flex-column align-items-start`}>
              <strong className="d-inline-block mb-2 text-warning">Clear Area</strong>

              <p className={`shiro text-${props.toggleLight} card-text mb-auto`}>This tool clears the text area</p>
              <p className='text-secondary' href="/">Backend:</p>
              <p className='text-success'><strong>let newText = "";</strong></p>
            </div>
          </div>
        </div>

        <div className="col-md-6">
          <div className={`shiro card flex-md-row mb-4 box-shadow h-md-250 border border-${props.toggleLight} `}>
            <div className={`kuro bg-${props.toggleDark} card-body d-flex flex-column align-items-start`}>
              <strong className="d-inline-block mb-2 text-warning">Copy To Clipboard</strong>

              <p className={`shiro text-${props.toggleLight} card-text mb-auto`}>This tool copies the text to your clipboard</p>
              <p className='text-secondary' href="/">Backend:</p>
              <p className='text-success'><strong>navigator.clipboard.writeText(text)</strong></p>
            </div>
          </div>
        </div>
    </div>
        <div className="text-center">
            <p className='text-primary'><strong>Click this button for source code</strong></p>
        <button type="button" className="btn btn-dark border border-warning"><a className="text-warning" href="https://github.com/yorr25/React-TextUtils-WithAboutPage" target="_blank" rel="noopener noreferrer"> Source code</a></button>
        </div>

    </div>

    
  )
}
