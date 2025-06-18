import "./header.css"




function Header() {


  return (
    <header className = "header">

      <nav className = "navLinks">
          <div className = "Logo">
            <a href="#home"> <img src="" alt="At-It Logo" />  </a>
          </div>

          <div className = "navItems"> 
            <a href="#home"> Home </a>
            <a href="#about"> About</a>
            <a href="#features">Features</a>
            <a href="#team">Team</a>
            <a href="#contact">Contact</a>
          </div>


          <div className = "signUpButton">
              <a href="#contact" className="btn">Sign Up</a>
          </div>
      </nav>
    </header>
  )
}

export default Header