import React, { useEffect } from 'react';

//impoer logo
import Logo from '../../assets/logo.png';
//import icons
import { TiSocialFacebook } from 'react-icons/ti';
import { AiOutlineTwitter } from 'react-icons/ai';
import { AiFillYoutube } from 'react-icons/ai';
import { FaPinterestP } from 'react-icons/fa';

// import AOS
import Aos from 'aos';
import 'aos/dist/aos.css';

const Footer = () => {
    // UseEffect to set animation duration
    useEffect(() => {
        Aos.init({ duration: 2000 });
    }, []);

    return (
        <div className="footer section">
            <div className="sectionContainer container grid">
                <div className="gridOne" data-aos="fade-up" data-aos-duration="2500">
                    <div className="logoDiv">
                        <img src={Logo} alt="Airplane logo" />
                    </div>
                    <p>Your mind should be stronger than your feelings, fly!</p>
                    <div className="media flex">
                        <TiSocialFacebook className="icon" />
                        <AiOutlineTwitter className="icon" />
                        <AiFillYoutube className="icon" />
                        <FaPinterestP className="icon" />
                    </div>
                </div>

                <div className="footerLinks" data-aos="fade-up" data-aos-duration="2500">
                    <span className="linkTitle">Information</span>
                    <li>
                        <a href="">Home</a>
                    </li>
                    <li>
                        <a href="">Explore</a>
                    </li>
                    <li>
                        <a href="">Flight status</a>
                    </li>
                    <li>
                        <a href="">Travel</a>
                    </li>
                    <li>
                        <a href="">Check-in</a>
                    </li>
                    <li>
                        <a href="">Manage your booking</a>
                    </li>
                </div>

                <div className="footerLinks" data-aos="fade-up" data-aos-duration="2500">
                    <span className="linkTitle">Quick guide</span>
                    <li>
                        <a href="">FAQ</a>
                    </li>
                    <li>
                        <a href="">How to</a>
                    </li>
                    <li>
                        <a href="">Features</a>
                    </li>
                    <li>
                        <a href="">Baggage</a>
                    </li>
                    <li>
                        <a href="">Route map</a>
                    </li>
                    <li>
                        <a href="">Ours communities</a>
                    </li>
                </div>

                <div className="footerLinks" data-aos="fade-up" data-aos-duration="2500">
                    <span className="linkTitle">Information</span>
                    <li>
                        <a href="">Chauffuer</a>
                    </li>
                    <li>
                        <a href="">Our partners</a>
                    </li>
                    <li>
                        <a href="">Destination</a>
                    </li>
                    <li>
                        <a href="">Careers</a>
                    </li>
                    <li>
                        <a href="">Transportation</a>
                    </li>
                    <li>
                        <a href="">Program rules</a>
                    </li>
                </div>
            </div>
        </div>
    );
};

export default Footer;
