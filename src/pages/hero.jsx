import "./hero.css"



function Hero() {

  return (


    <div className = "hero-container">

        <div className = "hero-text">
          <div className="tag1"> 
            <h2 className = "tagline">
                At-iT 
            </h2>
          </div>
          <div  className="tag2">
            <h1 className = "tagline">
              Coaching the Next Generation 
            </h1>
          </div>
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