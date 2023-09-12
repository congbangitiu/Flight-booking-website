import React, { useState } from 'react';

//import icons
import { SiConsul } from 'react-icons/si';
import { BsPhoneVibrate } from 'react-icons/bs';
import { AiOutlineGlobal } from 'react-icons/ai';
import { CgMenuGridO } from 'react-icons/cg';

//import images
import logo from '../../assets/logo.png';

const Navbar = () => {
    const [active, setActive] = useState('navBarMenu');
    const [background, setBackground] = useState('navBarTwo');

    const showNavBar = () => {
        setActive('navBarMenu showNavBar');
    };

    const hideNavBar = () => {
        setActive('navBarMenu');
    };

    const addBackgroundColor = () => {
        if (window.scrollY >= 10) {
            setBackground('navBarTwo navBarWithBackground');
        } else {
            setBackground('navBarTwo');
        }
    };
    window.addEventListener('scroll', addBackgroundColor);

    return (
        <div className="navBar flex">
            <div className="navBarOne flex">
                <div>
                    <SiConsul className="icon" />
                </div>
                <div className="none flex">
                    <li className="flex">
                        <BsPhoneVibrate className="icon" /> Support
                    </li>
                    <li className="flex">
                        <AiOutlineGlobal className="icon" /> Languages
                    </li>
                </div>
                <div className="atb flex">
                    <span>Sign In</span>
                    <span>Sign Out</span>
                </div>
            </div>

            <div className={background}>
                <div className="logoDiv">
                    <img src={logo} alt="Logo" className="Logo" />
                </div>

                <div className={active}>
                    <ul className="menu flex">
                        <li onClick={hideNavBar} className="listItem">
                            Home
                        </li>
                        <li onClick={hideNavBar} className="listItem">
                            About
                        </li>
                        <li onClick={hideNavBar} className="listItem">
                            Offers
                        </li>
                        <li onClick={hideNavBar} className="listItem">
                            Seats
                        </li>
                        <li onClick={hideNavBar} className="listItem">
                            Destinations
                        </li>
                    </ul>
                    <button onClick={hideNavBar} className="btn flex btnOne">
                        Contact
                    </button>
                </div>
                <button className="btn flex btnTwo">Contact</button>
                <div onClick={showNavBar} className="toggleIcon">
                    <CgMenuGridO className="icon" />
                </div>
            </div>
        </div>
    );
};

export default Navbar;
