import React, { useState } from "react";


import { Modal, Button } from "react-bootstrap";

const MakeListingModal = () => {
    //https://react-bootstrap.github.io/components/modal/
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    return (
        <div style={{ border: "solid", padding: "5px" }}>
            <h3>MakeListingModal component</h3>
            <Button variant="primary" onClick={handleShow}>
                Create Listing
          </Button>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Enter Listing Info</Modal.Title>
                </Modal.Header>
                <Modal.Body>Make listing form</Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
              </Button>
                    <Button variant="primary" onClick={handleClose}>
                        Publish Listing
              </Button>
                </Modal.Footer>
            </Modal>
        </div>
    );

}

export default MakeListingModal;