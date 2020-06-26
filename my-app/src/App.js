import React, { Fragment } from 'react';
import { Navbar, Nav, Jumbotron, Container, Media} from 'react-bootstrap';
// import ContactUs from './Components/ContactUs';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Logo from "./logo.png";


class App extends React.Component {
  render() {
    return (
      <Fragment>
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
            </Container>
          </Jumbotron>
        </div>

        {/* Header */}
        <Container>

        <header>
        <h3>
          Trusted and Reliable Security Solutions
        </h3>
        <p>We offer professional and reliable security service to multiple industries in Houston and the surrounding area. 
        Through consultation with our clients, we provide a custom solution that fulfills their needs as well as maximizes the standard of security. 
        Choose the kind of security service that resolve your unique security concerns as well as lie in your budget. Get in touch to get a proposal today!
        </p>
        </header>

        </Container>

        
          <Container>

          <h3>
            Among the Leading Security Companies in Houston
          </h3>

            <p>
            Our experience enables us to provide a complete security package that suits each client's individual needs. 
            We offer a range of services, which means you need not look any further for your security requirements.
            </p>

            <p>
            American Safeguard Alliance LLC is an acclaimed firm of security agents based in Houston, Texas. Our clients trust us for our effective security 
            solutions and the use of innovative technology to protect life and property. We provide certified, licensed, insured, and bonded Security Guards 
            who are screened to the standards of Texas Private Security Bureau. It ensures they are well trained and possess adequate 
            experience in their field to solve any security problem swiftly. 
            </p>

            <p>
            We take pride in our professionally dressed security agents who follow a strict code of conduct while effectively securing your valuable assets.
            </p>

          </Container>
        

        <Container>
          <h3>
            Our Services
          </h3>

          <p >American Safeguard Alliance is committed to delivering Total Quality Management by providing services that ensure quality 
          and safety while meeting client's expectations.
          </p>

          <ul>
            <li>Unarmed Security Service</li>
            <li>Armed Security Service</li>
            <li>Personal Protection Officers</li>
            <li>Property Patrol Inspections</li>
            <li>Construction Sites Security Service</li>
            <li>Corporate Security Service</li>
            <li>Shopping Center Security Service</li>
            <li>Residential Subdivision Security Service</li>
            <li>Firewatch Security Service</li>
          </ul>
        </Container>

        <Container>
          <h3>
            Why Choose Us?
          </h3>

          <p>
            American Safeguard Alliance is a trusted security partner in Houston and surrounding areas. We possess adequate experience and expertise and show strict 
            professionalism in our conduct to give you total peace of mind.
          </p>

          <p>
            <strong>Highly trained and experienced security guards: </strong>
            We select security guards based on character and experience and then refine their expertise with continuing education and site-specific training. 
            It ensures that they have specific training, qualification, and expertise to render distinguished <strong>Courteous and discreet service: </strong>
            With our continued training, we provide a positive work environment for our officers. It contributes to their loyalty,
             along with an industry-low rate of attrition. Thus, we can place a high emphasis on customer service, professionalism, and discretion.
          </p>

          <p>
            <strong>Custom security solutions: </strong>We work with you as your security partner to custom solutions that match your unique needs and fit in your security budget.
            We deploy state of the art technology to deliver unmatched security for your assets, property, and personnel. 
          </p>

          <p>
            <strong>24/7 Surveillance: </strong>Whether you are looking for an overtime security agency for your commercial building or the one that is always available, with our 24/7/365 surveillance,
            we keep you safe around the clock. Your security is our priority; that's why you can always trust us for your security needs.
          </p>

          <p>
            <strong>Effective security technology: </strong>We implement the best security options to protect your valuable assets. Whether it is the use of a simple wireless communication system or GPS tracking of security guards,
            we always use the best and latest options to provide you with adequate security solutions. We keep a tab on the latest technological innovation in the security landscape and make them available as early as possible.
          </p>

          <p>
            The advancement of technology has become the reason for the improvement in the security scenario, but there are still situations where it can be compromised. Therefore, 
            the need for an exclusive agency that can monitor and undertake all the required security services is inevitable. We let you focus on your work without worrying about security by protecting your resources and assets. 
            Get in touch to know how we can resolve your security concerns.
          </p>
        </Container>
      </Fragment> 

      
    )
  }
}



export default App;
