import React, { useState } from "react";
import "./header.css"
import { Link } from "react-router-dom";

export const Header = () => {
    const [Mobile, setMobile] = useState(false);
    return(
        <header>
            <div className="container-flexSB">
                <nav className="flexSB">
                    <div className="logo">
                        <img src="https://www.metri-tech.com/wp-content/uploads/2017/01/spacex-logo.jpg" alt="spacex" />
                    </div>
                    <ul className={Mobile ? "navMenu-list" : 'flexSB'} onClick={() => setMobile(false)}>
                        <Link to='/'>Home</Link>
                        <Link to='/history'>History</Link>
                        <Link to='/launches'>Launches</Link>
                        <Link to='/rockets'>Rockets</Link>
                        <i className="fa fa-search"></i>
                    </ul>
                    <button className="toggle" onClick={() => setMobile(!Mobile)}>
                        {Mobile ? <i className="fa fa-times"></i> : <i className="fa fa-bars"></i>}
                    </button>
                </nav>
                <div className="accout-flexSB">
                    
                </div>
            </div>
        </header>
    )
}
