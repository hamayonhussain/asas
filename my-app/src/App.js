import React, { Fragment } from 'react';
import { Navbar, Nav, Jumbotron, Container, Media } from 'react-bootstrap';
import ContactUs from './ContactUs';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Logo from "./logo.png";


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
              {/* <Nav.Link href="#careers">Careers</Nav.Link> */}
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
                  src={Logo}
                  alt="ASA-Logo"
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
            American Safeguard Alliance LLC is an acclaimed firm of security agents with a reputation for both effective security solutions
            and the use of innovative technology in the protection of life and property. We will provide you with certified, licensed,
            insured, and bonded Security Guards.  Each Security Professional has been screened to the standards of the United States Government Secret Clearance Program.
            Our uniformed security guards are outfitted with police-type uniforms. Our corporate general orders require that our personnel always keep their uniforms pressed and clean.  
            Their shoes are polished; military-style and men are clean-shaven with neat haircuts.  Our female officers are held to the same standard.  We pride ourselves on the appearance of our personnel, as they are representing our agency in your facilities.
 

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

        {/*Contact US*/}
 
        <Container>
          <h1 id="contactus" className="text-center">Contact Us</h1>
          <ContactUs />
        </Container>
      </Fragment> 
    )
  }
}



export default App;
