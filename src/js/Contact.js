import React from 'react';
import Button from 'react-bootstrap/Button';
import FormControl from 'react-bootstrap/FormControl';
import InputGroup from 'react-bootstrap/InputGroup';

const Contact = ({}) => {
    return (
        <div className="contact">
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
                <Button as="input" variant="secondary" type="submit" value="Say hi!" />{' '}
            </div>
        </div>
    )
}
export default Contact;