import React, { useEffect } from 'react';

//import assets
import aeroplane from '../../assets/takeOff.png';
import video from '../../assets/video.mp4';

// import AOS
import Aos from 'aos';
import 'aos/dist/aos.css';

const Home = () => {
    // UseEffect to set animation duration
    useEffect(() => {
        Aos.init({ duration: 1500 });
    }, []);

    return (
        <div className="home flex container">
            <div className="mainText">
                <h1 data-aos="fade-up" data-aos-duration="2500">
                    Create Ever-lasting Memories With Us
                </h1>
            </div>

            <div className="homeImages flex" data-aos="fade-down" data-aos-duration="2500">
                <div className="videoDiv">
                    <video className="video" src={video} alt="" autoPlay muted loop />
                </div>
                <img className="plane" src={aeroplane} alt="" />
            </div>
        </div>
    );
};

export default Home;
