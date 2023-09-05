import React, { useEffect } from "react";
import Gym1 from "./images/gym1.svg";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

const Section2 = () => {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    gsap.fromTo(
      ".anime",
      { opacity: 0, x: -90 },
      {
        opacity: 1,
        x: 0,
        duration: 0.8,
        scrollTrigger: {
          trigger: ".anime",
          start: "top 400px",
          end: "bottom center",
        //   markers: true,
        },
      }
    );

    gsap.fromTo(".gym1", {opacity:0, y:100}, {opacity:1, y:0,
    duration: 1.3,
    scrollTrigger:{
        trigger: ".gym1",
        start: "top 400px",
        end: "bottom center",
        // markers:true


    }
    
    })
  }, []);

  return (
    <div className="section-2">
      <div className="section2-container">
        <div className="section2-left anime">
          <h2>Work out at home for free.</h2>
          <p>
            We believe fitness should be accessible to everyone, everywhere,
            regardless of income or access to a gym. With hundreds of
            professional workouts, healthy recipes and informative articles, as
            well as one of the most positive communities on the web, you’ll have
            everything you need to reach your personal fitness goals – for free!
          </p>
          <h6>
            see more<box-icon name="right-arrow-alt"></box-icon>{" "}
          </h6>
        </div>

        <div className="section2-right">
          <img className="gym gym1" src={Gym1} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Section2;
