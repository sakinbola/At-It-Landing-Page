import "./features.css"
import featuresimg1 from "../img/featuresimage1.jpg"

import featuresvideo1 from "../video/Featuresvideo1.mp4"

import {useRef,useEffect} from "react";

import ReactPlayer from "react-player";

// future add customized video controls that look better 


function Features() {

  const videoRef = useRef(null);


  useEffect(()=> {
    const observer = new window.IntersectionObserver(
      ([entry]) => {
        if (videoRef.current) {
          if (!entry.isIntersecting) {
            videoRef.current.pause();
          }
        }
      },
      {threshold:0.1}
    );

    if (videoRef.current) observer.observe(videoRef.current);
    return () => observer.disconnect();
  },[]);

  // understanding so 
  // i initalzie a videoRef for the video object 
  // observer uses the interesction observer api when entry so i come into view
  // it checks if videoRef exists then if i eveyr leave the intersection it pauses i assume thrheshol means 0.1 sec
  // if videoRef.current exists and obserbers sees videoRef.current ? i dont what thats for then
  // cleanup functioin if the dependnceis change to disconnect observer api 

  return (
    <div className="features-section" id="features">
      <h1 className ="features-header"> Our Solution </h1>
      


      <div className="features-section-text"> 

        <div className="features-block"> 
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="upper icon-cloud-upload">
            <path stroke-linecap="round" stroke-linejoin="round" d="M12 16.5V9.75m0 0 3 3m-3-3-3 3M6.75 19.5a4.5 4.5 0 0 1-1.41-8.775 5.25 5.25 0 0 1 10.233-2.33 3 3 0 0 1 3.758 3.848A3.752 3.752 0 0 1 18 19.5H6.75Z" />
          </svg>

          <h2> Upload </h2>
          
          <p> Upload your Game Film </p>

          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="lower icon-upload">
            <path stroke-linecap="round" stroke-linejoin="round" d="M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5M16.5 12 12 16.5m0 0L7.5 12m4.5 4.5V3" />
          </svg>


        </div>


      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
        <path stroke-linecap="round" stroke-linejoin="round" d="m12.75 15 3-3m0 0-3-3m3 3h-7.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
      </svg>


        <div className="features-block"> 
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="upper Chart">
                <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 3v11.25A2.25 2.25 0 0 0 6 16.5h2.25M3.75 3h-1.5m1.5 0h16.5m0 0h1.5m-1.5 0v11.25A2.25 2.25 0 0 1 18 16.5h-2.25m-7.5 0h7.5m-7.5 0-1 3m8.5-3 1 3m0 0 .5 1.5m-.5-1.5h-9.5m0 0-.5 1.5M9 11.25v1.5M12 9v3.75m3-6v6" />
            </svg>


            <h2> Analyze </h2>

            <p> Our Algorithm made by Football Players for Football Players </p>

            <svg  viewBox="0 0 229 229" fill="none" xmlns="http://www.w3.org/2000/svg" stroke-width="1.5" stroke="currentColor" className="lower stocks">
              <path d="M218.25 114.5H192.52C187.986 114.49 183.573 115.966 179.957 118.702C176.341 121.437 173.72 125.282 172.496 129.648L148.115 216.382C147.958 216.921 147.63 217.395 147.181 217.731C146.732 218.068 146.186 218.25 145.625 218.25C145.064 218.25 144.518 218.068 144.069 217.731C143.62 217.395 143.292 216.921 143.135 216.382L85.865 12.6175C85.7079 12.0787 85.3802 11.6055 84.9312 11.2687C84.4823 10.932 83.9362 10.75 83.375 10.75C82.8138 10.75 82.2677 10.932 81.8188 11.2687C81.3698 11.6055 81.0421 12.0787 80.885 12.6175L56.5037 99.3525C55.2843 103.701 52.6793 107.533 49.0842 110.267C45.4891 113.001 41.1002 114.487 36.5837 114.5H10.75" stroke="black" stroke-width="20.75" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
        </div>

    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
      <path stroke-linecap="round" stroke-linejoin="round" d="m12.75 15 3-3m0 0-3-3m3 3h-7.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
    </svg>

      <div className="features-block"> 
          <svg viewBox="0 0 65 65" fill="none" xmlns="http://www.w3.org/2000/svg" stroke-width="1.5" stroke="currentColor" className="upper clipboard">
            <path d="M24.375 32.5H34.5312M24.375 40.625H34.5312M24.375 48.75H34.5312M42.6562 50.7812H48.75C50.3662 50.7812 51.9161 50.1392 53.0589 48.9964C54.2017 47.8536 54.8437 46.3037 54.8437 44.6875V16.5425C54.8437 13.4685 52.5552 10.8604 49.4921 10.6058C48.4791 10.5218 47.4652 10.4496 46.4506 10.3892M46.4506 10.3892C46.6303 10.9717 46.7189 11.5779 46.7187 12.1875C46.7187 12.7262 46.5047 13.2429 46.1238 13.6238C45.7429 14.0047 45.2262 14.2187 44.6875 14.2187H32.5C31.3787 14.2187 30.4687 13.3087 30.4687 12.1875C30.4687 11.5619 30.5635 10.9579 30.7396 10.3892M46.4506 10.3892C45.6842 7.90292 43.3658 6.09375 40.625 6.09375H36.5625C35.2604 6.09406 33.9927 6.51123 32.9449 7.28417C31.8971 8.05711 31.1242 9.14523 30.7396 10.3892M30.7396 10.3892C29.7213 10.4515 28.7083 10.5246 27.6954 10.6058C24.6323 10.8604 22.3437 13.4685 22.3437 16.5425V22.3437M22.3437 22.3437H13.2031C11.5212 22.3437 10.1562 23.7087 10.1562 25.3906V55.8594C10.1562 57.5412 11.5212 58.9062 13.2031 58.9062H39.6094C41.2912 58.9062 42.6562 57.5412 42.6562 55.8594V25.3906C42.6562 23.7087 41.2912 22.3437 39.6094 22.3437H22.3437ZM18.2812 32.5H18.3029V32.5217H18.2812V32.5ZM18.2812 40.625H18.3029V40.6467H18.2812V40.625ZM18.2812 48.75H18.3029V48.7717H18.2812V48.75Z" stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>


          <h2> GamePlan </h2>

          <p> Practice Better <br></br> Grow More </p>

          <img src={featuresimg1} alt="Green-Stripe-Pathway" className=" football-field"/>


            </div>


      </div>




      <div className="features-video-section">
          <div className="features-video-caption">
            <h2> Experience It </h2>
          </div>

          <div className="features-video-card">
              <video 
                ref={videoRef}
                className="features-video"
                controls = {true}
                width="100%"
                >
                <source src={featuresvideo1} type="video/mp4"  />
                Your browser does not support this video
              </video>
          </div>




      </div>
    </div>
  )
}

export default Features