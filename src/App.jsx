import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'

import Hero from "./pages/hero.jsx";
import Footer from "./pages/footer.jsx";
import Contact from "./pages/contact.jsx";
import Header from "./pages/header.jsx";
import Features from "./pages/features.jsx";
import About from "./pages/about.jsx";
import Team from "./pages/team.jsx";

function App() {
  return (
    <div>
          <Header/>
          <Hero/>
          <About/>
          <Features/>
          <Team/>
          <Contact/>
          <Footer/>
    </div>

  )
}


export default App