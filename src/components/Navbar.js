export default function Navbar() {
    
    return(
        <header className="navbar">
            <div className="navbar-wrapper">
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
