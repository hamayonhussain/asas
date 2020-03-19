import React from 'react';
import { Navbar } from 'react-bootstrap';
import { Nav } from 'react-bootstrap';
import './App.css';

class App extends React.Component {
  render() {
    return   <Navbar bg="black" variant="black">
    <Navbar.Brand href="#home">ASA</Navbar.Brand>
    <Nav className="ml-auto">
      <Nav.Link href="#about">About</Nav.Link>
      <Nav.Link href="#services">Services</Nav.Link>
      <Nav.Link href="#careers">Careers</Nav.Link>
    </Nav>
  </Navbar>
 
  }
}

export default App;
