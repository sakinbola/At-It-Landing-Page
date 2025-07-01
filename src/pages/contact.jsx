import "./contact.css"
import image1 from "../img/contactImage1.jpg"
import {useState , useEffect} from "react";


function Contact() {


  const initalValues = {userName:"", userEmail:"", userMessage:""};
  const [formValues,setFormValues] = useState(initalValues);
  const [formErrors,setFormErrors] = useState({});
  const [isSubmit, setisSubmit] = useState(false);  
  const [submissionStatus, setSubmissionStatus] = useState("initial");
  // e is event object so the input element for whatever trigger handleChange 
// e.target refers to the dom element 


// when change username / email = value 
  const handleChange = (e) => {

    // so value would be what im writing name is the username/password etc splices form values
    // creating new array and then value written assigned to name 

    const {name,value} = e.target
    setFormValues({...formValues, [name] :value});
    
  }

  // when rendered if submit and no errors console.log form values dependenencie on form errors
  useEffect(()=> {
    if(Object.keys(formErrors).length === 0 && isSubmit) {
      console.log("Form submitted successfully",formValues);
      setSubmissionStatus("success")

      // function send_email_values(fromValues.userName ,formValues.password , formValues.userMessage){
      //     return [fromValues.userName ,formValues.password , formValues.userMessage]
      // }

      
      // setFormValues(initalValues); // Reset form fields
      // setSubmissionStatus("initial");
      // setFormErrors({});      // <-- Clear errors
      // setisSubmit(false);     // <-- Reset submit state
      // possibility of resetting to inital after 
      
          // reset form 
    } else if (isSubmit) {
      setSubmissionStatus("error")
    }

  },[formErrors, isSubmit])


// when submit send to validate change issubmit to true 
  const handleSubmit = (e) => {
    e.preventDefault();
    setFormErrors(validate(formValues));
    setisSubmit(true);
  }


  // validate name is required and email 
  const validate = (values) => {
      const errors = {};
      // regular expression characters defines search patterns 
      const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
      console.log(values.userName)
      if (!values.userName) {
        errors.userName = "Name is required!"
      }

      if (!values.userEmail) {
        errors.userEmail = "Email is required!"
      } else if (!regex.test(values.userEmail)) {
        errors.userEmail  = "This is not a valid email address!"
      }
      
      return errors
  }



  return (
    <div className="contact-section" id="contact"> 
      <h2> Get Early Access </h2>


      <div className="contact-section-elements">



            <div className="form-container">

              {/* <pre> {Json.stringify(formValues,undefined,2)}</pre> */}
              {/* this is just to see the values in the console */}


              <form onSubmit={handleSubmit} action="/submit" method="Post" noValidate>
                {/* action where browswer sends info method post sens data in body of http request */}
                <div className="form-child"> 
                  <label for="name"> Name: </label>
                  <input type="text" 
                  id="name" 
                  name="userName" 
                  placeholder ="Your Full Name" 
                  value={formValues.username}
                  onChange = {handleChange}></input>
                </div>
                <p> {isSubmit && formErrors.userName} </p>

                <div className="form-child">
                  <label for="email"> Email: </label>
                  <input type="email" 
                  id="email" 
                  name="userEmail" 
                  placeholder="you@example.comn" 
                  value={formValues.email} 
                  onChange = {handleChange} 
                  ></input>
                </div>
                <p> {isSubmit && formErrors.userEmail} </p>

                <div className="form-child" > 
                  <label for="message">Message:</label>
                  <input 
                  type="message" 
                  id="message" 
                  name="userMessage" 
                  placeholder="Tell us your Thoughts" 
                  value={formValues.message} 
                  onChange = {handleChange}
                  />
                </div>

                <p> {isSubmit && formErrors.userMessage} </p>

                <input type="submit" value="Notify Me">
                </input>


                {submissionStatus === "success" && (
                  <div >
                    <p className="contact-submission-result success-message"> Thanks for reaching out! We've received your message and will be in touch soon. </p>
                  </div>
                )}

                {submissionStatus === "error" && (
                  <div>
                    <p className="contact-submission-result error-message"> There are errors in your form. Please fix them and try again </p>
                  </div>
                )}

                {submissionStatus === "initial" && (
                  <div>
                    <p className="contact-submission-result initial-message"> Fill out the Form above to get early access ! </p>
                  </div>
                )}
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

