import React, { Component} from "react";
import "../Styles/launches.css";
import { BrowserRouter as Router } from "react-router-dom";
import Search from "./Search";
//import Detail from "./Detail";
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
            return <div>
                <img className="loading" src="https://assets.materialup.com/uploads/c6980863-d7bf-41a6-9272-b6e2465b60c2/attachment.gif" alt="" /></div>;
        }

        else {

            return (
                <>
                    <Router>


                        <Search/>
                        <div className="container-body">
                            {items.map(item => (
                                <div className="launch-container"  key={item.id} tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true" >
                                    <a href="/detail"><img src={item.links.mission_patch} alt="" /></a>
                                    <div className="launch-name">{item.mission_name}</div>
                                    <div className="launch-info">
                                        <span>Year : {item.launch_year}</span>
                                        <span>Type : {item.rocket.rocket_type}</span>
                                    </div>
                                </div>
                            ))}
                        </div>


                    </Router>
                </>
            )
        }
    }
}
export default Launches;