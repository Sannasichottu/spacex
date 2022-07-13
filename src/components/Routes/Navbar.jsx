import React, {useRef} from "react";
import "../Styles/navbar.css"
import{FaBars, FaTimes} from "react-icons/fa";

function Navbar  ()  {
    const navRef = useRef();

    const showNavbar = () => {
        navRef.current.classList.toggle("responsive_nav");
    }

    return(
        <header>
            <h3>Space<span>X</span></h3>
            <nav ref={navRef}>
                <a href="/">Home</a>
                <a href="/history">History</a>
                <a href="/launches">Launches</a>
                <a href="/rockets">Rockets</a>
                <button className="nav-btn nav-close-btn" onClick={showNavbar} >
                    <FaTimes />
                </button >
            </nav>
                <button className="nav-btn" onClick={showNavbar}>
                    <FaBars/>
                </button>
        </header>
    )
}

export default Navbar;