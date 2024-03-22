import './Hero.css';
import handIcon from '../assets/hand_icon.png';
import arrowIcon from '../assets/arrow.png';
import heroImage from '../assets/hero_image.png';

function Hero() {
    return (
        <div className={'hero'}>
            <div className="hero-left">
                <h2>NEW ARRIVALS ONLY</h2>
                <div className="hero-hand-icon">
                    <p>new</p>
                    <img src={handIcon} alt="Hand Icon"/>
                </div>
                <p>collections</p>
                <p>for everyone</p>
                <div className="hero-latest-btn">
                    <div>Latest Collection</div>
                    <img src={arrowIcon} alt=""/>
                </div>
            </div>
            <div className="here-right">
                <img src={heroImage} alt=""/>
            </div>
        </div>
    );
}

export default Hero;