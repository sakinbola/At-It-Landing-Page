import "./team.css"
import photo1 from "../img/teamPhoto1.jpg"
import photo2 from "../img/teamPhoto2.png"

function Team() {

  return (
    <div className="team-section" id="team"> 

        <h1> The Team </h1>


      <div className = "team-section-cards"> 


        <div className="team-card"> 

          <div className="team-card-image ">
            <img src={photo1} alt="Team-Member-1" />
          </div>


            <div className =  "team-description"> 
              <h2> Joseph </h2>
              <p className = "Role"> Co-Founder </p>
              <p className = "Bio" > </p>
            </div>
        </div>



        <div className="team-card"> 

          <div className="team-card-image ">
            <img src={photo2} alt="Team-Member-2" />
          </div>
              <div className =  "team-description"> 
                <h2> Efe </h2>
              <p className = "Role"> Co-Founder </p>
              <p className = "Bio" > </p>
              </div>
        </div>


        <div className="team-card"> 
              <div className="team-card-image ">
                <img src="" alt="Team-Member-3" />
              </div>
            <div className =  "team-description"> 
              <h2> Seyi </h2>
              <p className = "Role"> Front-End Developer </p>
              <p className = "Bio" > </p>
            </div>
        </div>

        <div className="team-card"> 
              <div className="team-card-image ">
                <img src="" alt="Team-Member-4" />
              </div>
            <div className =  "team-description"> 
              <h2> Juan Pablo Camacho </h2>
              <p className = "Role"> Role </p>
              <p className = "Bio" > </p>
            </div>        
          </div>
          
        <div className="team-card"> 
              <div className="team-card-image ">
                <img src="" alt="Team-Member-5" />
              </div>
              <div className =  "team-description"> 
              <h2> </h2>
              <p className = "Role"> Role </p>
              <p className = "Bio" > </p>
            </div>
        </div>
      
      </div>

    </div>
  )
}

export default Team