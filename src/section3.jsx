import Gym2 from "./images/gym2.svg"
import React, {useEffect} from "react";
import gsap from "gsap";
import ScrollTrigger from 'gsap/ScrollTrigger'; 

const Section3 = () => {

    useEffect(()=>{
        gsap.registerPlugin(ScrollTrigger)

        gsap.fromTo('.div', {opacity: 0, x:-100},{opacity:1, x:0,
         duration: 0.8,
         scrollTrigger:{
            trigger: '.div',
            start:"top 320px",
            end: "bottom center",
            // markers:true
         }
        })
    })

    useEffect(()=>{
        gsap.registerPlugin(ScrollTrigger)

        gsap.fromTo(".gym2", {opacity:0, y:100},{opacity:1, y:0,
        duration: 1.8,
        scrollTrigger:{
            trigger:".gym2",
            start: "top 340px",
            end: "bottom center",
            // markers:true
        }
        
        })
    })
    return ( 
        <div className="section-2">
            <div className="section2-container section2">
                <div className="section2-left div">
                    <h2>Get more with low-cost training programs and advanced features.</h2>
                    <p>We believe fitness should be accessible to everyone, everywhere, regardless of income or access to a gym. With hundreds of professional workouts, healthy recipes and informative articles, as well as one of the most positive communities on the web, you’ll have everything you need to reach your personal fitness goals – for free!</p>
                    <h6>see more< box-icon name='right-arrow-alt'></box-icon>  </h6>

                </div>
                <div className="section2-right">
                    <img className="gym gym2" src= {Gym2} alt="" />
                </div>
            </div>
        </div>
     );
}
 
export default Section3;