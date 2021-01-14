import React from 'react';
import Button from 'react-bootstrap/Button';
import FormControl from 'react-bootstrap/FormControl';
import InputGroup from 'react-bootstrap/InputGroup';

const Contact = ({}) => {
    return (
        <div className="contact">
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"/>
            <div className="contact_message"> Hi there! Are you interested in my work? </div>
            <div className="contact_socials"> If you'd like to see what I'm up to, you can find me on:
            </div>
            <div className="contact_icons">
            <a href="#" class="fa fa-facebook"></a>
                <a href="#" class="fa fa-instagram"></a>
                <a href="#" class="fa fa-linkedin"></a>
                <a href="#" class="fa fa-twitter"></a>
            </div>
            <div className="contact_work"> If you'd like to hire me or just say 'hi', you can drop me a message right below. </div>
            <InputGroup className="mb-3">
                <FormControl
                placeholder="Name"
                aria-label="Username"
                aria-describedby="basic-addon1"
                />
            </InputGroup>

            <InputGroup className="mb-3">
                <FormControl
                placeholder="Email"
                aria-label="Recipient's username"
                aria-describedby="basic-addon2"
                />
            </InputGroup>

            <InputGroup>
                <FormControl placeholder="Message" as="textarea" aria-label="With textarea" />
            </InputGroup>
            <div className="submit">
                <Button as="input" variant="secondary" type="submit" value="Send!" />{' '}
            </div>
        </div>
    )
}
export default Contact;