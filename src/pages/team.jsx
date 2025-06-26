import "./team.css";
import photo1 from "../img/teamPhoto1.jpg";
import photo2 from "../img/teamPhoto2.jpg";



function Team() {

  return (
    <div className="team-section" id="team"> 

        <h2> The Team </h2>


      <div className = "team-section-cards"> 


        <div className="team-card"> 

          <div className="team-card-image ">
            <img src={photo1} alt="Team-Member-1" />
          </div>


            <div className =  "team-description"> 
              <h3> Joseph Makanju </h3>
              <p className = "Role"> Co-Founder </p>
              <p className = "Bio" > </p>
            </div>
        </div>



        <div className="team-card"> 

          <div className="team-card-image ">
            <img src={photo2} alt="Team-Member-2" />
          </div>
              <div className =  "team-description"> 
                <h3> Efe Ogolo</h3>
              <p className = "Role"> Co-Founder </p>
              <p className = "Bio" > </p>
              </div>
        </div>


        <div className="team-card"> 
              <div className="team-card-image ">
                <img src="" alt="Team-Member-3" />
              </div>
            <div className =  "team-description"> 
              <h3> Seyi Akinbola </h3>
              <p className = "Role"> Role </p>
              <p className = "Bio" > </p>
            </div>
        </div>

        <div className="team-card"> 
              <div className="team-card-image ">
                <img src="" alt="Team-Member-4" />
              </div>
            <div className =  "team-description"> 
              <h3> Juan Pablo Camacho </h3>
              <p className = "Role"> Role </p>
              <p className = "Bio" > </p>
            </div>        
          </div>
          
        <div className="team-card"> 
              <div className="team-card-image ">
                <img src="" alt="Team-Member-5" />
              </div>
              <div className =  "team-description"> 
              <h3> Jennifer </h3>
              <p className = "Role"> Role </p>
              <p className = "Bio" > </p>
            </div>
        </div>
      
      </div>

    </div>
  )
}

export default Team