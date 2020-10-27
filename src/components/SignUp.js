import React, { useState } from "react";

import { Form, Button, Modal, FormGroup, FormControl, ControlLabel } from "react-bootstrap";




const SignUp = () => {
    //https://react-bootstrap.github.io/components/modal/
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    return (
        <div>
            <Button className="sign-button" variant="primary" onClick={handleShow}>
                Sign Up
          </Button>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Sign Up Here</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                <Form>
                    
                    <Form.Group controlId="formBasicName">
                        <Form.Label>First and Last Name</Form.Label>
                        <Form.Control type="name" placeholder="Enter Name" />
                    </Form.Group>
                    <Form.Group controlId="formBasicEmail">
                        <Form.Label>Email Address</Form.Label>
                        <Form.Control type="email" placeholder="Enter Email" />
                        <Form.Text className="text-muted">
                            We'll never share your email with anyone else.
                        </Form.Text>
                    </Form.Group>

                    <Form.Group controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" placeholder="Password" />
                    </Form.Group>
                    <Form.Group controlId="formBasicCheckbox">
                        <Form.Check type="checkbox" label="I Agree to the Term and Conditions" />
                    </Form.Group>
                </Form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
              </Button>
                    <Button variant="primary" onClick={handleClose}>
                        Sign Up
              </Button>
                </Modal.Footer>
            </Modal>
        </div>
    );
};

export default SignUp;