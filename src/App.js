import './App.css';
import React, { useState } from 'react';
import About from './components/About';
import Navbar from './components/Navbar';
import Textform from './components/Textform';
import {
    BrowserRouter as Router,
    Routes,
    Route,
  } from "react-router-dom";

function App() {
    const [mode, setMode] = useState("dark")
    const [navClasses, setNavClasses] = useState("navbar-dark bg-dark")
    const [headingClasses, setHeadingClasses] = useState("text-light")
    const [mainClasses, setMainClasses] = useState("border-light bg-dark")
    const [myBoxClasses, setMyBoxClasses] = useState("bg-dark text-light border-light")
    const [summaryClasses, setSummaryClasses] = useState("text-light")
    const [toggleDark, setToggleDark] = useState("dark")
    const [toggleLight, setToggleLight] = useState("light")

    const toggleMode = () => {
        if (mode === "dark"){
            document.body.classList.remove("bg-dark")
            document.body.classList.add("bg-light")
            let root = document.getElementById("root")
            root.classList.remove(`bg-dark`)
            root.classList.add(`bg-light`)
            setNavClasses("navbar-light bg-light")
            setMainClasses("border-dark bg-light")
            setMyBoxClasses("bg-light text-dark border-dark")
            setHeadingClasses("text-dark")
            setSummaryClasses("text-dark")
            setToggleDark("light")
            setToggleLight("dark")
            setMode("light")
        }
        else{
            document.body.classList.remove("bg-light")
            document.body.classList.add("bg-dark")
            let root = document.getElementById("root")
            root.classList.remove(`bg-light`)
            root.classList.add(`bg-dark`)
            setNavClasses("navbar-dark bg-dark")
            setMainClasses("border-light bg-dark")
            setMyBoxClasses("bg-dark text-light border-light")
            setHeadingClasses("text-light")
            setHeadingClasses("text-light")
            setToggleDark("dark")
            setToggleLight("light")
            setSummaryClasses("text-light")
            setMode("dark")
        }
    }

    return (

    <>
    <Router>
        <Navbar Classes={navClasses} mode={mode} toggleMode={toggleMode}/>
        <Routes>
          <Route exact path="/about" element={<About toggleDark={toggleDark} toggleLight={toggleLight} />}/>
          <Route exact path="/" element={<Textform heading="Enter Your text below" mainClasses={mainClasses} myBoxClasses={myBoxClasses} headingClasses={headingClasses} summaryClasses={summaryClasses} />}/>
        </Routes>
    </Router>
    </>
  );
}

export default App;
