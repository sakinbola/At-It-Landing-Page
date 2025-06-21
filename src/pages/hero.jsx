import "./hero.css"



function Hero() {

  return (


    <div className = "hero-container">

        <div className = "hero-text">
            <h1 className = "tagline">
              At-iT <br></br> Coaching the Next Generation 
            </h1>
        </div>

        
        <div className = "hero-image" id = "home">
        </div>

        <div className = "hero-button">
          <a href="#contact" className="learn">Learn More Today</a>
        </div>
    </div>
  )
}

export default Hero