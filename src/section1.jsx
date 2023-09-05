import React, { useEffect } from "react";
import 'boxicons'
import gsap from "gsap";
import ScrollTrigger from 'gsap/ScrollTrigger'; 

const Section1 = () => {

    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger);
    
        gsap.fromTo(
          '.card-section',
          {
            opacity: 0,
            y: 60, 
          },
          {
            opacity: 1,
            y: 0,
            duration: 0.8,
            scrollTrigger: {
              trigger: '.card-section',
              start: 'top 500px', 
              end: 'bottom center',
            //   markers: true, 
            },
          }
        );
      }, []);
    return ( 
        <div className="section1">
            <div className="section1-container">
                <div className="top">
                    <h1>Not sure where to start?</h1>
                    <p>Programs offer day-to-day guidance on an interactive calendar to keep you on track. </p>
                </div>
                <div className="card-section">
                    <div className="card1">
                        <h2>Workout Videos</h2>
                        <p>Access to hundreds of free, full-length workout videos. <box-icon name='right-arrow-alt'></box-icon> </p>
                    </div>
                    <div className="card1">
                        <h2>Workout Programs</h2>
                        <p>Affordable and effective workout programs.<box-icon name='right-arrow-alt'></box-icon>  </p>
                    </div>
                    <div className="card1">
                        <h2>Meal Plans</h2>
                        <p>Plans built with registered dietitians and nutritionists. <box-icon name='right-arrow-alt'></box-icon> </p>
                    </div>
                    <div className="card1">
                        <h2>WO Plus ALL ACCESS</h2>
                        <p>Add powerful features to your membership. <box-icon name='right-arrow-alt'></box-icon>  </p>
                    </div>
                   
                </div>
            </div>
        </div>
     );
}
 
export default Section1;