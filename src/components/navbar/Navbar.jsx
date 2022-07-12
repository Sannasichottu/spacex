import React, { useState } from "react";
import "./navbar.css";
import { Link } from "react-router-dom";

export const Navbar = () => {
    const [Mobile, setMobile] = useState(false);
    return (
        <>
            <div className="container">
                <div className="navbar">
                    <div className="menu">
                        <h3 className="logo">Space<span>X</span></h3>
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
                    </div>
                </div>

                <div className="main-container">
                    <div className="main">
                        <header>
                            <div className="overlay">
                                <div className="inner">
                                    <h2 className="title">Welcome to SPACE<span>X</span></h2>
                                    <p>Space Exploration Technologies Corp. is an American spacecraft manufacturer, space launch provider, and a satellite</p>
                                    <button href="#" className="btn">Read More</button>
                                </div>
                            </div>
                            
                        </header>
                    </div>
                </div>

            </div>
        </>
    )


}
