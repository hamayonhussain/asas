import React from 'react';
import { Jumbotron, Container, Media} from 'react-bootstrap';
import Logo from "./logo.png";


export default function Footer() {
    return (

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

    )
}