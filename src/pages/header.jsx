import "./header.css"




function Header() {


  return (
    <div className = "frame" id = "header">
      <nav className = "navLinks">
          <div className = "Logo">
            <a href="#home"> <img src="" alt="At-It Logo" />  </a>
          </div>

          <div className = "navItems"> 
            <a href="#home"></a>
            <a href="#about"></a>
            <a href="#features"></a>
            <a href="#team"></a>
            <a href="#contact"></a>
          </div>


          <div className = "signUpButton">
            <a href="#contact" className="btn"> Sign Up </a>
          </div>
      </nav>
    </div>
  )
}

export default Header