import React, { useEffect } from 'react';

//import icons
import { RxCalendar } from 'react-icons/rx';
import { BsShieldCheck, BsBookmarkCheck } from 'react-icons/bs';

// import AOS
import Aos from 'aos';
import 'aos/dist/aos.css';

const Info = () => {
    // UseEffect to set animation duration
    useEffect(() => {
        Aos.init({ duration: 2000 });
    }, []);

    return (
        <div className="info section">
            <div className="infoContainer container">
                <div className="titleDiv flex">
                    <h2 data-aos="fade-up" data-aos-duration="2500">
                        Travel to make memories all around the world
                    </h2>
                    <button className="btn" data-aos="fade-up" data-aos-duration="2500">
                        View all
                    </button>
                </div>
                <div className="cardsDiv grid">
                    <div className="singleCard grid" data-aos="fade-up" data-aos-duration="2500">
                        <div className="iconDiv flex">
                            <RxCalendar className="icon" />
                        </div>
                        <span className="cardTitle">Book & Relax</span>
                        <p>You can also call airlines from your phone and book a flight ticket !!!</p>
                    </div>
                    <div className="singleCard grid" data-aos="fade-up" data-aos-duration="2500">
                        <div className="iconDiv flex colorOne">
                            <BsShieldCheck className="icon" />
                        </div>
                        <span className="cardTitle">Smart Checklist</span>
                        <p>You can also call airlines from your phone and book a flight ticket !!!</p>
                    </div>
                    <div className="singleCard grid" data-aos="fade-up" data-aos-duration="2500">
                        <div className="iconDiv flex colorTwo">
                            <BsBookmarkCheck className="icon" />
                        </div>
                        <span className="cardTitle">Save More</span>
                        <p>You can also call airlines from your phone and book a flight ticket !!!</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Info;
