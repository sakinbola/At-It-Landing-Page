import "./team.css"
import photo1 from "../img/teamPhoto1.jpg"
import photo2 from "../img/teamPhoto2.png"

function Team() {

  return (
    <div className="team-section" id="team"> 

        <h1> The Team </h1>


      <div className = "team-section-cards"> 


        <div className="team-card"> 
          <img src={photo1} alt="Team-Member-1" />
            <div className =  "team-description"> 
              <h2> hello</h2>
              <p> Role </p>
              <p> </p>
            </div>
        </div>



        <div className="team-card"> 
            <img src={photo2} alt="Team-Member-2" />
              <div className =  "team-description"> 
                <h2>  hello</h2>
                <p> Role </p>
                <p></p>
              </div>
        </div>


        <div className="team-card"> 
          <img src="" alt="Team-Member-3" />
            <div className =  "team-description"> 
              <h2> </h2>
                <p> Role </p>
                <p></p>
            </div>
        </div>

        <div className="team-card"> 
          <img src="" alt="Team-Member-4" />
            <div className =  "team-description"> 
              <h2> </h2>
                <p> Role </p>
                <p></p>
            </div>        
          </div>
          
        <div className="team-card"> 
          <img src="" alt="Team-Member-5" />
              <div className =  "team-description"> 
              <h2> </h2>
                <p> Role </p>
                <p></p>
            </div>
        </div>
      
      </div>

    </div>
  )
}

export default Team