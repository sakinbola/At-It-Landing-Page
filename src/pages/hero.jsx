import "./hero.css"
import {useState,useEffect} from "react"

function Hero() {

  const [isLoaded,setIsLoaded] = useState(false)

  useEffect(() => {
  setTimeout(() => setIsLoaded(true), 500);

    // could write a fetch data function
        // fetchData().then(() => setIsLoaded(true));
  },[])


  return (




    <div className = {`hero-container fade-in ${isLoaded ? "loaded" : ""}`}>

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