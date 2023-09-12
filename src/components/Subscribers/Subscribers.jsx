import React, { useEffect } from 'react';

// import AOS
import Aos from 'aos';
import 'aos/dist/aos.css';

const Subscribers = () => {
    // UseEffect to set animation duration
    useEffect(() => {
        Aos.init({ duration: 2000 });
    }, []);

    return (
        <div className="subscribe section">
            <div className="sectionContainer container">
                <h2 data-aos="fade-down" data-aos-duration="2500">
                    Subscribe Newsletters
                    <br /> &
                    <br /> Get Latest News
                </h2>
                <div className="inputDiv flex" data-aos="fade-up" data-aos-duration="2500">
                    <input type="text" placeholder="Enter your email address" />
                    <button className="btn">Subscribe</button>
                </div>
            </div>
        </div>
    );
};

export default Subscribers;
