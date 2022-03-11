import menu from '../assets/img/svg/menu.svg';
import cancel from '../assets/img/svg/cancel.svg';

export default function Navbar() {

    function openNavMobile() {
        const mobileNavbar = document.querySelector('.site-options');
        const mobileNavMenu = document.querySelector('.mobile-nav-icon.menu');
        const mobileNavCancel = document.querySelector('.mobile-nav-icon.cancel');
        
        if (mobileNavbar.style.display === "flex") {
            mobileNavbar.style.display = "none";
            mobileNavMenu.style.display = "block";
            mobileNavCancel.style.display = "none";
        } else {
            mobileNavbar.style.display = "flex";
            mobileNavMenu.style.display = "none";
            mobileNavCancel.style.display = "block";
        }
    }
    
    return(
        <header className="navbar">
            <div className="navbar-wrapper">
                <button class="mobile-nav" onClick={openNavMobile}>
                    <img class="mobile-nav-icon menu" src={ menu } alt="menu icon" />
                    <img class="mobile-nav-icon cancel" src={ cancel } alt="cancel icon" />
                </button>
                <a href="/" className="site-name">
                    Playlist Pair
                </a>
                <div className="site-options">
                    <a href="/about-us">About Us</a>
                    <a href="/donate">Donate</a>
                    <a href="/contact-us">Contact Us</a>
                </div>
            </div>
          </header>
    );
}
