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
            return <div>
                <img src="https://cdn.dribbble.com/users/3148081/screenshots/6176842/rocket.gif" alt="" />
            </div>;
        }

        else {

            return (
                <>
                    

                    <div class="card-detail text-center">
                        {items.map(item => (
                            <div key={item.id} >
                                <div class="card-detail-header">

                                </div>
                                <div class="card-detail-body">
                                    <img class="card-detail-img-top" src={item.links.mission_patch_small} alt="Card image cap" />
                                    <br/>
                                    <br />
                                    <h5 class="card-detail-title">{item.mission_name}</h5>
                                    <p class="card-detail-text">{item.details}</p>
                                    <ul class="card-detail-list-group">
                                        <li class="list-group-item">Launch Year : <span>{item.launch_year}</span></li>
                                        <li class="list-group-item">Rocket Name : <span>{item.rocket.rocket_name}</span></li>
                                        <li class="list-group-item">Rocket Type : <span>{item.rocket.rocket_type}</span></li>
                                        <li class="list-group-item">Site Name : <span>{item.launch_site.site_name_long}</span></li>
                                        <li class="list-group-item">Launch Success : <span>{item.launch_success ? `true` : `false`}</span></li>
                                        <li class="list-group-item">Launch-Date-UTC : <span>{item.launch_date_utc}</span></li>
                                        <li class="list-group-item">Launch-Date-Local : <span>{item.launch_date_local}</span></li>
                                    </ul>
                                    <button type="button" class="btn btn-warning"><a href={item.links.article_link} target="_blank" rel="noreferrer">Article</a></button>
                                    <button type="button" class="btn btn-success"><a href={item.links.wikipedia} target="_blank" rel="noreferrer">Wikipedia</a></button>
                                    <button type="button" class="btn btn-danger"><a href={item.links.video_link} target="_blank" rel="noreferrer">Video-Clips</a></button>
                                    <button type="button" class="btn btn-secondary"><a href={item.links.presskit} target="_blank" rel="noreferrer">PDF</a></button>
                                </div>
                                <div class="card-footer text-muted">
                                    <hr />
                                </div>
                            </div>
                        ))}
                    </div>


                </>
            )
        }
    }
}
export default Detail;