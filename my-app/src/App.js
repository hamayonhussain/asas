import React from 'react';
import { Navbar, Nav, Container} from 'react-bootstrap';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
// import ContactUs from './Components/ContactUs';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
// import Logo from "./logo.png";



class App extends React.Component {
  render() {
    return (
        <Container>
          <Router>
              <Navbar collapseOnSelect expand="lg" bg="black" variant="dark">
                <Navbar.Brand href="#home">Home</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                  <Nav className="ml-auto">
                    <Nav.Link href="#about">About Us</Nav.Link>
                    <Nav.Link href="#services">Services</Nav.Link>
                    <Nav.Link href="#careers">Careers</Nav.Link>
                    <Nav.Link href="#contactus">Contact us</Nav.Link>
                  </Nav>
                </Navbar.Collapse>
              </Navbar>
            </Router>

            {/* Jumbotron */}
            {/* <div className="black-bg">
              <Jumbotron fluid>
                <Container>
                  <Media>
                  <img
                      width={180}
                      height={200}
                      className="align-self-end mx-auto"
                      src={Logo}
                      alt="ASA-Logo"
                      />
                  </Media>
                  <h2>American Safeguard Alliance</h2>
                  <p>
                    Security Guard Company
                  </p>
                </Container>
              </Jumbotron>
            </div> */}
        </Container> 
    )
  }
}



export default App;
