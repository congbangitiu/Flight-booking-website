import React, { useEffect } from 'react';

//import images
import airplaneWindow2 from '../../assets/airplaneWindow2.png';

// import AOS
import Aos from 'aos';
import 'aos/dist/aos.css';

const Lounge = () => {
    // UseEffect to set animation duration
    useEffect(() => {
        Aos.init({ duration: 2000 });
    }, []);

    return (
        <div className="lounge container section">
            <div className="sectionContainer grid">
                <div className="imgDiv" data-aos="fade-up" data-aos-duration="2500">
                    <img src={airplaneWindow2} alt="" />
                </div>
                <div className="textDiv">
                    <h2 data-aos="fade-down" data-aos-duration="2500">
                        Unaccompanied Minor Lounge
                    </h2>

                    <div className="grids grid" data-aos="fade-up" data-aos-duration="2500">
                        <div className="singleGrid" data-aos="fade-up" data-aos-duration="2500">
                            <span className="gridTitle">Help through the airpot</span>
                            <p>
                                You can also call airlines from your phone and book a flight ticket to one of your
                                favorite destinations.
                            </p>
                        </div>
                        <div className="singleGrid" data-aos="fade-up" data-aos-duration="2500">
                            <span className="gridTitle">Priority boarding</span>
                            <p>
                                You can also call airlines from your phone and book a flight ticket to one of your
                                favorite destinations.
                            </p>
                        </div>
                        <div className="singleGrid" data-aos="fade-up" data-aos-duration="2500">
                            <span className="gridTitle">Care on the flight</span>
                            <p>
                                You can also call airlines from your phone and book a flight ticket to one of your
                                favorite destinations.
                            </p>
                        </div>
                        <div className="singleGrid" data-aos="fade-up" data-aos-duration="2500">
                            <span className="gridTitle">Chauffeur-drive service</span>
                            <p>
                                You can also call airlines from your phone and book a flight ticket to one of your
                                favorite destinations.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Lounge;
