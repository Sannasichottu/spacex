//import { render } from "@testing-library/react";
import React, { Component, Fragment } from "react";
import "../Styles/rocket.css"
import { Filter } from "./Filter";
import Footer from "./Footer";


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
                                    <img src="https://upload.wikimedia.org/wikipedia/commons/e/ee/Iridium-4_Mission_%2825557986177%29.jpg" className="card-img-rocket"  alt="..." />
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
                                                    <img src="https://images.unsplash.com/photo-1634175734730-feeb73322946?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=841&q=80" class="d-block w-100" alt="..." />
                                                        
                                                    </div>
                                                    <div class="carousel-item">
                                                        <img src="https://images.pexels.com/photos/586106/pexels-photo-586106.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" class="d-block w-100" alt="..." />
                                                    </div>
                                                    <div class="carousel-item">
                                                        <img src="https://images.pexels.com/photos/586089/pexels-photo-586089.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" class="d-block w-100" alt="..." />
                                                    </div>
                                                    <div class="carousel-item">
                                                        <img src="https://images.pexels.com/photos/586045/pexels-photo-586045.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" class="d-block w-100" alt="..." />
                                                    </div>
                                                    <div class="carousel-item">
                                                    <img src="https://images.pexels.com/photos/60130/pexels-photo-60130.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" class="d-block w-100" alt="..." />
                                                    </div>
                                                    <div class="carousel-item">
                                                        <img src="https://images.pexels.com/photos/586079/pexels-photo-586079.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" class="d-block w-100" alt="..." />
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
                                                    <p>$ {rocket.cost_per_launch/1000000} Million</p>
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
                <Footer/>
            </div>
        )
    }
}

export default Rocket;