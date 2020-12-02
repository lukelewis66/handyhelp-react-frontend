import React, { useState } from "react";
import { Modal, Button } from "react-bootstrap";

const DeleteFeedItemModal = (props) => {
    var uid = props.UID;
    var fid = props.FID;

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const handleSubmit = () => {
        return new Promise(function (resolve, reject) {
            const formData = new FormData();
            formData.append("UID", uid);
            formData.append("FID", fid);
            console.log("DeleteFeedItemModal UID: ", uid, " and FID: ", fid);
            const server = process.env.REACT_APP_SERVER_URL;
            fetch(`${server}/deletefeeditem`, {
                method: 'POST',
                body: formData,
            });
            handleClose();
        });
    }

    return (
        <div>
            <Button variant="primary" onClick={handleShow}>
                Delete Post
            </Button>
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Are you sure?</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <p style={{ color: "red" }}>
                        You will not be able to recover the post or its images.
                    </p>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
              </Button>
                    <Button variant="primary" onClick={handleSubmit}>
                        Delete anyways
              </Button>
                </Modal.Footer>
            </Modal>
        </div>
    )
}

export default DeleteFeedItemModal