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
              <Nav.Link href="#careers">Careers</Nav.Link>
              <Nav.Link href="#contactus">Contact Us</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>

        {/* Jumbotron */}
        <div className="black-bg">
          <Jumbotron fluid>
            <Container>
              <Media>
              <img
                  width={200}
                  height={200}
                  className="align-self-end mx-auto"
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
