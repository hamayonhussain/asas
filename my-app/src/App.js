import React, { Fragment } from 'react';
import { Navbar, Nav, Jumbotron, Container, Media } from 'react-bootstrap';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

class App extends React.Component {
  render() {
    return (
      <Fragment>
          <Navbar collapseOnSelect expand="lg" bg="black" variant="dark">
          <Navbar.Brand href="#home">ASA</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="ml-auto">
              <Nav.Link href="#about">About</Nav.Link>
              <Nav.Link href="#services">Services</Nav.Link>
              <Nav.Link href="#careers">Careers</Nav.Link>
              <Nav.Link href="#contactus">Contact us</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>

        {/* Jumbotron */}
        <div className="black-bg">
          <Jumbotron fluid>
            <Container>
              <Media>
              <img
                  width={180}
                  height={200}
                  className="align-self-end mx-auto"
                  src={process.env.PUBLIC_URL + "asas-patch.png"}
                  alt="Generic placeholder"
                />
              </Media>
              <h2>American Safeguard Alliance</h2>
              <p>
                Security Guard Company
              </p>
              <p>
                License # B11605101
              </p>
            </Container>
          </Jumbotron>
        </div>

        <div>
          <Container>
          <h1 id="about" className="text-center">About</h1>
            <p className="text-center">
              American Safeguard Alliance offers security guard services in Houston, Dallas & Austin area. Our company is registered with the state of texas
              and our security officers get trained by a security academy getting certified in Level 2, 3 or 4. We cover a wide array of security work
            </p>
          </Container>
        </div>

        <Container>
        <h1 className="text-center" id="services">Services</h1>
          <ul>
            <li>Unarmed</li>
            <li>Armed</li>
            <li>Personal Protection Officers</li>
            <li>Property Patrol Inspections</li>
            <li>Construction Sites</li>
            <li>Corporate</li>
            <li>Shopping Center</li>
            <li>Residential Subdivision</li>
            <li>Firewatch</li>
          </ul>
        </Container>
      </Fragment>
    )
  }
}

export default App;
