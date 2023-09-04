import React from "react";
import Gym1 from "./images/gym1.svg"
const Section2 = () => {
    return ( 
        <div className="section-2">
            <div className="section2-container">
                <div className="section2-left">
                    <h2>Work out at home for free.</h2>
                    <p>We believe fitness should be accessible to everyone, everywhere, regardless of income or access to a gym. With hundreds of professional workouts, healthy recipes and informative articles, as well as one of the most positive communities on the web, you’ll have everything you need to reach your personal fitness goals – for free!</p>
                    <h6>see more< box-icon name='right-arrow-alt'></box-icon>  </h6>
                </div>

                <div className="section2-right">
                    <img className="gym" src={Gym1} alt="" />
                </div>
            </div>
        </div>
     );
}
 
export default Section2;