import React from "react";
import heroImg from './images/workout.svg'
import nike from './images/nike.svg'
import nike1 from './images/logo1.svg'
import nike2 from './images/logo2.svg'
import nike3 from './images/logo3.svg'
import nike4 from './images/logo4.svg'
import nike5 from './images/logo5.svg'
import "./hero.css"

const Herosection = () => {
  return (
    <div className="hero-section">
      <div className="hero-container">
        <div className="left-text">
         <div className="new"> <h3>
            <span>new</span> High Intensity workout to burn calories
          </h3>
          </div>
          <h2>workout with me</h2>
          <p>A huge selection of health and fitness content, healthy recipes and transformation stories to help you get fit and stay fit!</p>
          <button className="btn">Join Club Now!</button>
        </div>
        <div className="right-side">
            <img className="work-out" src={heroImg} alt="" />
           <div className="inside-text">
           <div className="inside">
                <h3>38:14</h3>
                <p>TIME</p>
            </div>

            <div className="inside1">
                <h4>165</h4>
                <p>EST CALORIES</p>
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
