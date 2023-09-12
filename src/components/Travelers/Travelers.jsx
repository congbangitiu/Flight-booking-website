import React, { useEffect } from 'react';

//import destination images
import Paris from '../../assets/Paris.png';
import NewYork from '../../assets/NewYork.png';
import London from '../../assets/London.png';
import Dubai from '../../assets/Dubai.png';
import Vietnam from '../../assets/Vietnam.png';
import Thailand from '../../assets/Thailand.png';
//import travelers images
import traveler1 from '../../assets/traveler1.png';
import traveler2 from '../../assets/traveler2.png';
import traveler3 from '../../assets/traveler3.png';
import traveler4 from '../../assets/traveler4.png';
import traveler5 from '../../assets/traveler5.png';
import traveler6 from '../../assets/traveler6.png';

// import AOS
import Aos from 'aos';
import 'aos/dist/aos.css';

const Travelers = () => {
    // UseEffect to set animation duration
    useEffect(() => {
        Aos.init({ duration: 2000 });
    }, []);

    const travelers = [
        {
            id: 1,
            destinationImage: Paris,
            travelerImage: traveler1,
            travelerName: 'Mark Feehily',
            socialLink: '@markfeehily',
        },
        {
            id: 2,
            destinationImage: NewYork,
            travelerImage: traveler2,
            travelerName: 'Kian Egan',
            socialLink: '@kianegan',
        },
        {
            id: 3,
            destinationImage: London,
            travelerImage: traveler3,
            travelerName: 'Shane Filan',
            socialLink: '@shanefilan',
        },
        {
            id: 4,
            destinationImage: Dubai,
            travelerImage: traveler4,
            travelerName: 'Nicky Byrne',
            socialLink: '@nickybyrne',
        },
        {
            id: 5,
            destinationImage: Vietnam,
            travelerImage: traveler5,
            travelerName: 'Adele Laurie',
            socialLink: '@adelelaurie',
        },
        {
            id: 6,
            destinationImage: Thailand,
            travelerImage: traveler6,
            travelerName: 'Taylor Swift',
            socialLink: '@taylorswift',
        },
    ];
    return (
        <div className="travelers container section">
            <div className="sectionContainer">
                <h2 data-aos="fade-down" data-aos-duration="2500">
                    Top travelers of this month !!!
                </h2>

                <div className="travelersContainer grid">
                    {travelers.map((traveler) => (
                        <div className="singleTraveler" key={traveler.id} data-aos="fade-up" data-aos-duration="2500">
                            <img src={traveler.destinationImage} alt="" className="destinationImage" />
                            <div className="travelerDetails">
                                <div className="travelerPicture">
                                    <img src={traveler.travelerImage} className="travelerImage" />
                                </div>
                                <div className="travelerName">
                                    <span>{traveler.travelerName}</span>
                                    <p>{traveler.socialLink}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Travelers;
