import React, { useState } from "react";
import { Button, Modal } from "react-bootstrap";
import { checkUserActive, deactivateAccount } from "../../firebase/accountFunctions";

const AccountDeactivate = () => {
    const [formMessage, setFormMessage] = useState("");

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const handleDeactivate = () => {
        checkUserActive(localStorage.getItem("UID"))
            .then((data) => {
                console.log(data);
                if(data.active) {
                    deactivateAccount(localStorage.getItem("UID"))
                    .then(() => setFormMessage("Your account has been deactivated, please close this window"))
                    .catch((err) => setFormMessage(err));
                }
                else {
                    setFormMessage("This account is already deactivated!");
                }

            })
    }

    return (
        <div className="formStyle">
            <Button className="active-button" variant="danger" onClick={handleShow}>
                Deactivate Account
            </Button>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Deactivate your account?</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <p style={{ color: "red", fontWeight: "bold" }}>
                        If you deactivate your account the following will apply:
                    </p>
                    <ul>
                        <li>Your account will no longer appear in searches or feeds</li>
                        <li>All your listings and past contracts will no longer be visible</li>
                        <li>Any images associated with your account will be permanently deleted</li>
                    </ul>
                </Modal.Body>
                <Modal.Footer>
                    <p style={{ color: "red" }}>{formMessage}</p>
                    <Button variant="secondary" onClick={handleClose}>
                        Keep my account active
                    </Button>
                    <Button variant="primary" onClick={handleDeactivate}>
                        Deactivate my account anyways
                    </Button>
                </Modal.Footer>
            </Modal>
        </div>);
}

export default AccountDeactivate;