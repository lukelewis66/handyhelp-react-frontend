import React, { useState } from "react";

import { Button, Modal } from "react-bootstrap";



const SignIn = () => {
    //https://react-bootstrap.github.io/components/modal/
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    return (
        <div>
            <Button variant="primary" onClick={handleShow}>
                SignIn
          </Button>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>SignIn Component</Modal.Title>
                </Modal.Header>
                <Modal.Body>SignIn Form</Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
              </Button>
                    <Button variant="primary" onClick={handleClose}>
                        Sign In
              </Button>
                </Modal.Footer>
            </Modal>
        </div>
    );
};

export default SignIn;