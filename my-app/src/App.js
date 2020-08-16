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
        // <Container>
        //   <Router>
        //       <Navbar collapseOnSelect expand="lg" bg="black" variant="dark">
        //         <Navbar.Brand href="#home">Home</Navbar.Brand>
        //         <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        //         <Navbar.Collapse id="responsive-navbar-nav">
        //           <Nav className="ml-auto">
        //           <Link to="/Home">Home</Link>
        //             <Nav.Link href="#about">About Us</Nav.Link>
        //             <Nav.Link href="#services">Services</Nav.Link>
        //             <Nav.Link href="#careers">Careers</Nav.Link>
        //             <Nav.Link href="#contactus">Contact us</Nav.Link>
        //           </Nav>
        //         </Navbar.Collapse>
        //       </Navbar>
        //     </Router>

        //     {/* Jumbotron */}
        //     {/* <div className="black-bg">
        //       <Jumbotron fluid>
        //         <Container>
        //           <Media>
        //           <img
        //               width={180}
        //               height={200}
        //               className="align-self-end mx-auto"
        //               src={Logo}
        //               alt="ASA-Logo"
        //               />
        //           </Media>
        //           <h2>American Safeguard Alliance</h2>
        //           <p>
        //             Security Guard Company
        //           </p>
        //         </Container>
        //       </Jumbotron>
        //     </div> */}
        // </Container> 

        
            <Router>
              <div>
                <nav>
                  <ul>
                    <li>
                      <Link to="/">Home</Link>
                    </li>
                    <li>
                      <Link to="/about">About</Link>
                    </li>
                    <li>
                      <Link to="/users">Users</Link>
                    </li>
                  </ul>
                </nav>
        
                {/* A <Switch> looks through its children <Route>s and
                    renders the first one that matches the current URL. */}
                <Switch>
                  <Route path="/about">
                    <About />
                  </Route>
                  <Route path="/users">
                    <Users />
                  </Route>
                  <Route path="/">
                    <Home />
                  </Route>
                </Switch>
              </div>
            </Router>
          
        
        
          )
        }
      }
      
      function Home() {
        return <h2>Home</h2>;
      }
      
      function About() {
        return <h2>About</h2>;
      }
      
      function Users() {
        return <h2>Users</h2>;
      }


export default App;
