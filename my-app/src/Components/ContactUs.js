import React from 'react';
import emailjs from 'emailjs-com';
import {Form, Button} from 'react-bootstrap';



export default function ContactUs() {

  function sendEmail(e) {
    e.preventDefault();

    emailjs.sendForm('gmail', 'template_lwxzCTK3', e.target, 'user_kHnL0qAI6MA9eA5Et7gag')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      }); 
  }

  return (

    <div>
      <Form id="contact-form" onSubmit={sendEmail}>

              <Form.Group controlId="exampleForm.ControlInput1" >
                <Form.Label></Form.Label>
                <Form.Control type="hidden" name="contact_number"/>
              </Form.Group>

              <Form.Group controlId="exampleForm.ControlInput1">
                <Form.Label></Form.Label>
                <Form.Control type="text" name="user_name" placeholder="John Smith" />
              </Form.Group>

              <Form.Group controlId="exampleForm.ControlInput1">
                <Form.Label></Form.Label>
                <Form.Control type="email" name="user_email" placeholder="email@example.com" />
              </Form.Group>

              
              <Form.Group controlId="exampleForm.ControlTextarea1">
                <Form.Label></Form.Label>
                <Form.Control as="textarea" placeholder="Message" name="message" rows="3" />
              </Form.Group>
              <Button variant="dark" type="submit" value="Send">
                Submit
              </Button>
      </Form>
    </div>
  );
}