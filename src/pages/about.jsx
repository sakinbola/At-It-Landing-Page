
import "./about.css"
import aboutimg1 from "../img/aboutimg1.jpg"
import aboutimg2 from "../img/aboutimg2.jpg"
import aboutimg3 from "../img/aboutimg3.jpg"
import aboutimg4 from "../img/aboutimg4.jpg"

function About() {

  return (
    <div className= "about-section" id="about" >
      

      <div className = "about-text"> 

        <h1> The Game's Missing Piece  </h1>
        <h2> Accessible Coaching at Your Fingertips</h2>
        <h3> The greatest tragedy in sports isn't losing — it's never reaching your potential <br></br>
        Our Mission is to close that gap </h3>
      </div>


      <div className = "about-img"> 

          <div className = "about-card card1"> 
            <img src= {aboutimg1} alt="aboutimg1" className ="about-card-img1" />
          </div>
          <div className = "about-card card2"> 
            <img src={aboutimg2} alt="aboutimg2" />
          </div>
          <div className = "about-card card3"> 
            <img src={aboutimg3} alt="aboutimg3" />
          </div>
          <div className = "about-card card4"> 
            <img src={aboutimg4} alt="aboutimg4" />
          </div>


      </div>



      
    </div>
  )
}

export default About