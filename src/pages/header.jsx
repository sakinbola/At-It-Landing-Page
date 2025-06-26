import "./header.css"
import Hamburger from "../components/hamburger.jsx"
import {useState,useEffect} from "react"


function Header() {
  const [HamburgerOpen,setHamburgerOpen] = useState(false)

  const toggleHamburger = () =>{
    setHamburgerOpen(!HamburgerOpen)
  }

  // Close menu when clicking on a link
      const closeMenu = () => {
        setHamburgerOpen(false)
      }

// Prevent body scroll when menu is open
    useEffect(() => {
      if (HamburgerOpen) {
        document.body.style.overflow = 'hidden'
      } else {
        document.body.style.overflow = 'unset'
      }
      
      return () => {
        document.body.style.overflow = 'unset'
      }
    }, [HamburgerOpen])



  return (
    <header className = "header">

      <nav className = "navLinks">
          <div className = "Logo">
            <a href="#home"> <img src="" alt="At-It Logo" />  </a>
          </div>

        <div className={`navItems ${HamburgerOpen ? 'open' : ''}`}>
            <a href="#home" onClick={closeMenu}> Home </a>
            <a href="#about" onClick={closeMenu}> About</a>
            <a href="#features" onClick={closeMenu}>Features</a>
            <a href="#team" onClick={closeMenu}>Team</a>
            <a href="#contact" onClick={closeMenu}>Contact</a>
          </div>


          <div className = "signUpButton">
              <a href="#contact" className="btn">Be The First To Know</a>
          </div>


            <div className = "hamburger" onClick={toggleHamburger}>
                  <Hamburger isOpen={HamburgerOpen} />
            </div>

            
      </nav> 
    </header>
  )
}

export default Header