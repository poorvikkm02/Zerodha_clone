import { useState } from "react";
import { Link, Outlet } from "react-router-dom";
import zerodhaLogo from '../assets/zerodha-logo.svg';
import Footer from "./Footer";

const Header = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    const toggleMenu = () => setMenuOpen(prev => !prev);

    return (
        <div className="Home">
            {/* Navbar */}
            <div className="navbar">
                <div className="logo">
                    <Link to="/dashboard" onClick={() => setMenuOpen(false)}>
                        <img src={zerodhaLogo} alt="Logo" />
                    </Link>
                </div>

                <button className="hamburger" onClick={toggleMenu} aria-label="Toggle menu">
                    <span className={`hamburger-line ${menuOpen ? 'open' : ''}`}></span>
                    <span className={`hamburger-line ${menuOpen ? 'open' : ''}`}></span>
                    <span className={`hamburger-line ${menuOpen ? 'open' : ''}`}></span>
                </button>

                <div className={`links ${menuOpen ? 'links--open' : ''}`}>
                    <ul>
                        <li><Link to="/dashboard" onClick={() => setMenuOpen(false)}>Home</Link></li>
                        <li><Link to="/dashboard/about" onClick={() => setMenuOpen(false)}>About</Link></li>
                        <li><Link to="/dashboard/contact" onClick={() => setMenuOpen(false)}>Contact</Link></li>
                        <li><Link to="/dashboard/support" onClick={() => setMenuOpen(false)}>Support</Link></li>
                        <li><Link to="/dashboard/Namma_uru" onClick={() => setMenuOpen(false)}>Namma_uru</Link></li>
                    </ul>
                </div>
            </div>

            <Outlet />
            <Footer />
        </div>
    );
};

export default Header;