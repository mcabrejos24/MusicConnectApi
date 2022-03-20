import menu from '../assets/img/svg/menu.svg';
import cancel from '../assets/img/svg/cancel.svg';
import { useState } from "react";

export default function Navbar() {
    const [siteOptionsState, setSiteOptionsState] = useState('');
    const [menuIconState, setMenuIconState] = useState('');
    const [cancelIconState, setCancelIconState] = useState('');

    function openNavMobile() {
        if (siteOptionsState === '') {
            setSiteOptionsState('show-site-options');
            setMenuIconState('hide-menu-icon');
            setCancelIconState('show-cancel-icon');
        } else {
            setSiteOptionsState('');
            setMenuIconState('');
            setCancelIconState('');
        }
    }
    
    return(
        <header className="navbar">
            <div className="navbar-wrapper">
                <button className="mobile-nav" onClick={openNavMobile}>
                    <img className={`mobile-nav-icon menu ${menuIconState}`} src={ menu } alt="menu icon" />
                    <img className={`mobile-nav-icon cancel ${cancelIconState}`} src={ cancel } alt="cancel icon" />
                </button>
                <a href="/" className="site-name">
                    Playlist Pair
                </a>
                <div className={`site-options ${siteOptionsState}`}>
                    <a href="/">Home</a>
                    <a href="/about-us">About Us</a>
                    <a href="/donate">Donate</a>
                    <a href="/contact-us">Contact Us</a>
                </div>
            </div>
          </header>
    );
}
