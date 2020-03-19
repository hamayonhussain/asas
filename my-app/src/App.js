import React, { Fragment } from 'react';
import { Navbar } from 'react-bootstrap';
import { Nav, Jumbotron, Container, Image } from 'react-bootstrap';
import './App.css';

class App extends React.Component {
  render() {
    return (
      <Fragment>
        <div>
          <Navbar bg="black" variant="black">
          <Navbar.Brand href="#home">ASA</Navbar.Brand>
          <Nav className="ml-auto">
            <Nav.Link href="#about">About</Nav.Link>
            <Nav.Link href="#services">Services</Nav.Link>
            <Nav.Link href="#careers">Careers</Nav.Link>
            <Nav.Link href="#contact">Contact</Nav.Link>
          </Nav>
          </Navbar>
        </div>

        {/* Jumbotron */}
        <div className="black-bg">
          <Jumbotron fluid>
            <Container>
              <h1 >American Safeguard Alliance LLC</h1>
              <p>
                Security Guard Company
              </p>
            </Container>
          </Jumbotron>
        </div>

        {/* asas image */}
        <div>
        <Image src="public/asas-patch.png" fluid />
        </div>
      </Fragment>
    )
  }
}

export default App;
