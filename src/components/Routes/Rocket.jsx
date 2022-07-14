//import { render } from "@testing-library/react";
import React, { Component, Fragment } from "react";
import "../Styles/rocket.css"
import { Filter } from "./Filter";

class Rocket extends Component {
    constructor() {
        super();

        this.state = {
            rockets: [],
            selectedHeight: 0
        }
    }

    componentDidMount() {
        fetch("https://api.spacexdata.com/v3/rockets")
            .then((response) => response.json())
            .then(rockets => this.setState({ rockets: rockets }))
    }

    handleChange = (e) => {
        this.setState({ selectedHeight : e.target.value });
    }

    render() {
        const{rockets, selectedHeight} = this.state;
        const filteredRockets = rockets.filter((rocket) => rocket.height.feet > selectedHeight)
        return (
            <div className="container-rocket">
                <h1>Space<span>X</span> Rockets Encyclopedia</h1>
                <Filter onChange={this.handleChange} />
                <div className="row">
                    {filteredRockets.map((rocket) => (

                        <Fragment>
                            <div className="col-md-6">
                                <div className="card" key={rocket.id}>
                                    <img src="https://upload.wikimedia.org/wikipedia/commons/e/ee/Iridium-4_Mission_%2825557986177%29.jpg" className="card-img-top" alt="..." />
                                    <div className="card-body">
                                        <h5 className="card-title">{rocket.rocket_name}</h5>
                                        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                        <a href={rocket.wikipedia} target={"_blank"} className="btn btn-primary" data-toggle="modal" data-target={`#popup${rocket.id}`}>View More</a>
                                    </div>
                                </div>
                            </div>

                            <div className="modal fade" id={`popup${rocket.id}`} tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                                <div className="modal-dialog modal-lg">
                                    <div className="modal-content">
                                        <div className="modal-header">
                                            <h5 className="modal-title" id="exampleModalLabel">{rocket.rocket_name}</h5>
                                            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                                <span aria-hidden="true">&times;</span>
                                            </button>
                                        </div>
                                        <div className="modal-body">
                                            <div id={`carousel${rocket.id}Controls`} class="carousel slide" data-ride="carousel">
                                                <div class="carousel-inner">
                                                    <div class="carousel-item active">
                                                        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/9c/SpaceX_falcon_in_warehouse.jpg/440px-SpaceX_falcon_in_warehouse.jpg" class="d-block w-100" alt="..." />
                                                    </div>
                                                    <div class="carousel-item">
                                                        <img src="https://www.nasaspaceflight.com/wp-content/uploads/2020/11/10CD8E7A-2037-4563-AF86-DA63A6D8732C.jpeg" class="d-block w-100" alt="..." />
                                                    </div>
                                                    <div class="carousel-item">
                                                        <img src="https://img.republicworld.com/republic-prod/stories/promolarge/xhdpi/syb000b9tf8za41j_1654690702.jpeg" class="d-block w-100" alt="..." />
                                                    </div>
                                                    <div class="carousel-item">
                                                        <img src="https://cms.qz.com/wp-content/uploads/2018/03/spacex-falcon-heavy-space-internet-satellite-elon-musk.jpg?quality=75&strip=all&w=1600&h=900&crop=1" class="d-block w-100" alt="..." />
                                                    </div>
                                                    <div class="carousel-item">
                                                        <img src="https://www.sciencenews.org/wp-content/uploads/2018/09/082418_MT_reviews_war_feat.jpg" class="d-block w-100" alt="..." />
                                                    </div>
                                                    <div class="carousel-item">
                                                        <img src="https://cdn.mos.cms.futurecdn.net/fnfyE7cDwV9JWCopNK8Ycb-1200-80.jpg" class="d-block w-100" alt="..." />
                                                    </div>
                                                </div>
                                                <a class="carousel-control-prev" href={`#carousel${rocket.id}Controls`} role="button" data-slide="prev">
                                                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                                                    <span class="sr-only">Previous</span>
                                                </a>
                                                <a class="carousel-control-next" href={`#carousel${rocket.id}Controls`} role="button" data-slide="next">
                                                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                                                    <span class="sr-only">Next</span>
                                                </a>
                                            </div>

                                            <div className="row rocket-info">
                                                <div className="col-sm-4">
                                                    <h4>Height</h4>
                                                    <p>{rocket.height.feet} Feet</p>
                                                </div>
                                                <div className="col-sm-4">
                                                    <h4>Diameter</h4>
                                                    <p>{rocket.diameter.feet} Feet</p>
                                                </div>
                                                <div className="col-sm-4">
                                                    <h4>Mass</h4>
                                                    <p>{rocket.mass.kg/1000} Tonne</p>
                                                </div>
                                                <div className="col-sm-4">
                                                    <h4>First Flight</h4>
                                                    <p>{rocket.first_flight}</p>
                                                </div>
                                                <div className="col-sm-4">
                                                    <h4>Active</h4>
                                                    <p>{rocket.active ? `true` : `false`}</p>
                                                </div>
                                                <div className="col-sm-4">
                                                    <h4>Cost/Launch</h4>
                                                    <p>${rocket.cost_per_launch/1000000} Million</p>
                                                </div>
                                            </div>
                                            <p>{rocket.description}</p>
                                            <a href={rocket.wikipedia} className="btn btn-primary btn-block" target="_blank" rel="noreferrer">Learn More on Wikipedia</a>

                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Fragment>
                    ))}
                </div>
            </div>
        )
    }
}

export default Rocket;