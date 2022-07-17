import React, { Component } from "react";
import "../Styles/detail.css";
//import styled from "styled-components";
//import Footer from "./Footer";


class Detail extends Component {

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
                <div className="col-md-6">
                    <div className="container-pop">
                        {items.map(item => (
                            <div key={item.id}>
                                <img src={item.links.mission_patch_small} alt="" />
                                <div className="pop-info">
                                    <div className="name">Mission Name : {item.mission_name}</div>
                                    <div className="details">Launch Year : <span>{item.launch_year}</span></div>
                                    <div className="details">Rocket Name : <span>{item.rocket.rocket_name}</span></div>
                                    <div className="details">Rocket Type : <span>{item.rocket.rocket_type}</span></div>
                                    <div className="details">Site_id : <span>{item.launch_site.site_id}</span></div>
                                    <div className="details">Site Name : <span>{item.launch_site.site_name_long}</span></div>
                                    <div className="details">Launch Success : <span>{item.launch_success ? `true` : `false`}</span></div>
                                    <div className="details">Site Name : <span>{item.launch_site.site_name}</span></div>
                                    <div className="details">Details : <span>{item.details}</span></div>
                                    <a href={item.links.article_link} className="btn btn-primary btn-block" target="_blank" rel="noreferrer">Article</a>
                                    <a href={item.links.presskit} className="btn btn-primary btn-block" target="_blank" rel="noreferrer">PDF</a>
                                    <a href={item.links.wikipedia} className="btn btn-primary btn-block" target="_blank" rel="noreferrer">Wikipedia</a>
                                    <a href={item.links.video_link} className="btn btn-primary btn-block" target="_blank" rel="noreferrer">Video-Clips</a>
                                    
                                </div>
                            </div>
                        ))}
                    </div>




                </div>
            )
        }
    }
}
export default Detail;