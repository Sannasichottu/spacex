import React from 'react';
import { Navbar, Nav} from 'react-bootstrap';
import {BrowserRouter as Router,Switch,Route,Link } from "react-router-dom";
import Rocket from "./Rocket"
import Home from "./Home"
import Launches from "./Launches"
import History from "./History"
import "../Styles/navbar.css";

function Navbars () {
    return (
        <Router>
            <div>
                <Navbar bg="dark" variant={"dark"} className="header" expand="lg">
                    <Navbar.Brand className='heading' >Space<span>X</span></Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="nav-link">
                            <Nav.Link as={Link} to={"/home"}>Home</Nav.Link>
                            <Nav.Link as={Link} to={"/history"}>History</Nav.Link>
                            <Nav.Link as={Link} to={"/rocket"}>Rocket</Nav.Link>
                            <Nav.Link as={Link} to={"/launches"}>Launches</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>
            </div>
            <div>
                <Switch>
                    <Route path="/launches">
                        <Launches />
                    </Route>
                    <Route path="/history">
                        <History />
                    </Route>
                    <Route path="/rocket">
                        <Rocket />
                    </Route>
                    <Route path="/">
                        <Home />
                    </Route>
                </Switch>
            </div>
        </Router>
    );
}

export default Navbars;