import React from "react";
import "../Styles/home.css";

function Home  ()  {
    return(
        <>
            <div className="main-container">
                <div className="main">
                    <div className="head">
                        <div className="overlay">
                            <div className="inner">
                                <h2 className="title">Space<span>X</span></h2>
                                <p>Space Exploration Technologies Corp. is an American spacecraft manufacturer, space launch provider, and a satellite communications corporation headquartered in Hawthorne, California</p>
                                <button className="btn">
                                    <a href="https://en.wikipedia.org/wiki/SpaceX" target={"_blank"} >Read More</a>
                                </button>
                                
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Home;