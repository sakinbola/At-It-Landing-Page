import "./footer.css"
import logo_picture from "../img/logo.png"

function Footer() {

  return (
    <footer className = "footer">

          <div className = "footer-container">
            <div className = "Logo">
              <a href="#home"> <img src={logo_picture} alt="At-It Logo" />  </a>
            </div>
            <div className = "slogan">
                <p> At-It Coaching the Next Generation</p>
            </div>
          </div>

          {/* <a href = "https://unsplash.com/" target = "_blank" className="credit">Images from Unsplash</a> */}
    </footer>
  )
}

export default Footer