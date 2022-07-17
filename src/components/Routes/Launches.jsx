import React, { Component } from "react";
import "../Styles/launches.css";
import {BrowserRouter as Router,Switch,Route,Link } from "react-router-dom";
import Detail from "./Detail";
//import styled from "styled-components";
//import Footer from "./Footer";


class Launches extends Component {

    constructor(props) {
        super(props);
        this.state = {
            items: [],
            isLoaded: false,
        }
    }

    componentDidMount() {
        fetch('https://api.spacexdata.com/v3/launches')
            .then(res => res.json())
            .then(json => {
                this.setState({
                    isLoaded: true,
                    items: json,
                })
            });
    }

    render() {

        var { isLoaded, items } = this.state;

        if (!isLoaded) {
            return <div><h2>Loading...</h2></div>;
        }

        else {

            return (
                <>
                    <Router>
                        <div className="container-head">

                            <div className="launch-head">
                                <div className="head-launch">
                                    <img src="https://ouch-cdn2.icons8.com/i2FOOfif6Y0CzTm3eCtnqMhDw2819Mv2deIJ0EjVKV0/rs:fit:456:456/czM6Ly9pY29uczgu/b3VjaC1wcm9kLmFz/c2V0cy9zdmcvNzUy/LzliZjFjOWFmLTU1/ZjItNDcyNy05MDhk/LTdlNDU2YTcwMDE1/Ni5zdmc.png" alt="launch logo" />
                                    Launches
                                </div>
                                <div className="search-box">
                                    <img src="https://www.freeiconspng.com/thumbs/search-icon-png/search-icon-png-26.png" alt="search" />
                                    <div className="search-input">
                                        <input type="search" name="" id="" v placeholder="search" />
                                        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/18/Creative-Tail-rocket.svg/1200px-Creative-Tail-rocket.svg.png" alt="" />
                                    </div>
                                </div>
                            </div>
                        </div>



                        <div className="container-body">
                            {items.map(item => (
                                <div className="launch-container" key={`popup${item.id}`} tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true" >
                                    <img src={item.links.mission_patch} alt="" />
                                    <div className="launch-name">{item.mission_name}</div>
                                    <div className="launch-info">
                                        <span>Year : {item.launch_year}</span>
                                        <button>
                                        <Link as={Link} to={"/detail"}>Details</Link>
                                        </button>
                                        <span>Type : {item.rocket.rocket_type}</span>

                                    </div>
                                </div>
                            ))}
                        </div>

                        <div>
                            <Switch>
                                <Route path="/detail">
                                    <Detail />
                                </Route>

                            </Switch>
                        </div>
                    </Router>
                </>
            )
        }
    }
}
export default Launches;