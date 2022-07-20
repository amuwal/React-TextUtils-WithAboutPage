import React from 'react'
import { Link } from 'react-router-dom';
export default function Navbar(props) {
    const returnOpposite = (mode) => {

        if(mode === "light"){
            return "dark"
        }
        else{
            return "light"
        }
    }
  return (
  <nav id="nav" className={`navbar navbar-expand-lg border-bottom mb-4 ${props.Classes}`}>
    <Link className="navbar-brand" to="/">TextUtils</Link>
    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
    </button>

    <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav mr-auto">
        <li className="nav-item active">
            <Link className="nav-link" to="/">Home</Link>
        </li>
        <li className="nav-item">
            <Link className="nav-link" to="/about">About</Link>
        </li>
        </ul>
        <button type="button" className="btn btn-dark border border-warning" onClick={props.toggleMode}>Enable {returnOpposite(props.mode)} mode</button>
        
    </div>
   </nav>
    
  )
}
