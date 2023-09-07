import React, { useEffect,useState } from "react";
import heroImg from "./images/workout.svg";
import nike from "./images/nike.svg";
import nike1 from "./images/logo1.svg";
import nike2 from "./images/logo2.svg";
import nike3 from "./images/logo3.svg";
import nike4 from "./images/logo4.svg";
import nike5 from "./images/logo5.svg";
import "./hero.css";
import gsap, { Power4 } from "gsap";

const Herosection = () => {
  useEffect(() => {
    const tl = gsap.timeline();

    tl.fromTo(
      ".left-text",
      {
        opacity: 0,
        y: -100,
      },
      {
        opacity: 1,
        y: 0,
        ease: Power4.easeInOut,
        duration: 1.4,
      }
    );
    tl.fromTo(
      ".work-out",
      { opacity:0, y: -100 },
      {opacity: 1, y:0, ease: "bounce", duration: 1.7 }
    );

 
  }, []);

  const [time, setTime] = useState("00:00:00 AM");

  const updateTime = () => {
    const now = new Date();
    let hours = now.getHours()
    let AmPM = "AM"
    if(hours>=12){
      AmPM="PM"
    }

    if(hours>12){
     hours =-12
    }
   hours = hours.toString().padStart(2, '0');
    const minutes = now.getUTCMinutes().toString().padStart(2, '0');
    const seconds =now.getSeconds().toString().padStart(2, '0')
    const newTime = `${hours}:${minutes}:${seconds} ${AmPM}`;
    
  if(newTime !== time){
    setTime(newTime)
  }
  };

  useEffect(() => {
    const intervalId = setInterval(updateTime, 1000);
    return () => clearInterval(intervalId);
  }, []);
 
  updateTime();
  return (
    <div className="hero-section">
      <div className="hero-container">
        <div className="left-text">
          <div className="new">
            {" "}
            <h3>
              <span>new</span> High Intensity workout to burn calories
            </h3>
          </div>
          <h2>workout with me</h2>
          <p>
            A huge selection of health and fitness content, healthy recipes and
            transformation stories to help you get fit and stay fit!
          </p>
          <button className="btn">Join Club Now!</button>
        </div>
        <div className="right-side">
          <img className="work-out" src={heroImg} alt="" />
          <div className="inside-text">
            <div className="inside">
              <h3>{time}</h3>
              <p>TIME</p>
            </div>

            <div className="inside1">
              <h4>165</h4>
              <p>EST CALORIES</p>
            </div>

            <div className="inside2">
              <box-icon name="run"></box-icon>
              <h3>
                4,95 <span className="span">km/h</span>
              </h3>
            </div>

            <div className="inside3">
              <h3>500+</h3>
              <p>Free Workout Videos</p>
            </div>
          </div>
        </div>
      </div>
      <div className="under-section">
        <h4 className="feat">AS FEATURED IN</h4>
        <div className="logos">
          <img src={nike} alt="" />
          <img src={nike1} alt="" />
          <img src={nike2} alt="" />
          <img src={nike3} alt="" />
          <img src={nike4} alt="" />
          <img src={nike5} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Herosection;
