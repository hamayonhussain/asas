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
              <h1>American Safeguard Alliance</h1>
              <Image src="public/asas-patch.png" fluid />
            </Container>
          </Jumbotron>
        </div>
      </Fragment>
    )
  }
}

export default App;
