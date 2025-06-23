import "./contact.css"
import image1 from "../img/contactImage1.jpg"

function Contact() {

  return (
    <div className="contact-section"> 
      <h1> Get Early Access </h1>


      <div className="contact-section-elements" id="contact">

            <div className="form-container">
              <form action="" method="Post">
                {/* action where browswer sends info method post sens data in body of http request */}
                <div className="form-child"> 
                  <label for="name"> Name: </label>
                  <input type="text" id="name" name="userName" placeholder ="Your Full Name" required></input>
                </div>


                <div className="form-child">
                  <label for="email"> Email: </label>
                  <input type="email" id="email" name="userEmail" placeholder="you@example.comn" required></input>
                </div>


                <div className="form-child" > 
                  <label for="message">Message:</label>
                  <input type="message" id="message" name="userMessage" placeholder="Tell us your Thoughts" required minlength="4"/>
                </div>

                <input type="submit" value="Register">
                </input>
              </form>



            </div>
            

            <div className="contact-image">
              <img src={image1} alt="Contact-Football Image" />
            </div>
          
          
          
          </div>

    </div>
  )
}

export default Contact

