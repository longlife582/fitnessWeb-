import Gym2 from "./images/gym2.svg"

const section3 = () => {
    return ( 
        <div className="section-2">
            <div className="section2-container section2">
                <div className="section2-left">
                    <h2>Get more with low-cost training programs and advanced features.</h2>
                    <p>We believe fitness should be accessible to everyone, everywhere, regardless of income or access to a gym. With hundreds of professional workouts, healthy recipes and informative articles, as well as one of the most positive communities on the web, you’ll have everything you need to reach your personal fitness goals – for free!</p>
                    <h6>see more< box-icon name='right-arrow-alt'></box-icon>  </h6>

                </div>
                <div className="section2-right">
                    <img className="gym" src= {Gym2} alt="" />
                </div>
            </div>
        </div>
     );
}
 
export default section3;