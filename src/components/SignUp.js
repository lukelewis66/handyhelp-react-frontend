import React, { useState } from "react";

import { Button, Modal } from "react-bootstrap";



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
                    <Modal.Title>SignUp Component</Modal.Title>
                </Modal.Header>
                <Modal.Body>SignUp Form</Modal.Body>
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