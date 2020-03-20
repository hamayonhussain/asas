import React, { Fragment } from 'react';
import { Navbar, Nav, Jumbotron, Container, Media } from 'react-bootstrap';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

class App extends React.Component {
  render() {
    return (
      <Fragment>
        <div>
          <Navbar className="" bg="black" variant="black">
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
              <Media>
              <img
                  width={300}
                  height={300}
                  className="align-self-end m-auto"
                  src={process.env.PUBLIC_URL + "asas-patch.png"}
                  alt="Generic placeholder"
                />
              </Media>
              <h1 >American Safeguard Alliance</h1>
              <p>
                Security Guard Company
              </p>
            </Container>
          </Jumbotron>
        </div>
      </Fragment>
    )
  }
}

export default App;
