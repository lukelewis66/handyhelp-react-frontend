import React, { useState } from "react";
import { Button, Modal } from "react-bootstrap";
import { checkUserActive, reactivateAccount } from "../../firebase/accountFunctions";

const AccountReactivate = () => {
    const [formMessage, setFormMessage] = useState("");

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const handleDeactivate = () => {
        checkUserActive(localStorage.getItem("UID"))
            .then((data) => {
                console.log(data);
                if(data.active) {
                    setFormMessage("This account is already activated!");
                }
                else {
                    reactivateAccount(localStorage.getItem("UID"))
                    .then(() => setFormMessage("Your account has been reactivated, please close this window"))
                    .catch((err) => setFormMessage(err));
                }

            })
    }

    return (
        <div className="component-border">
            <Button className="active-button" variant="primary" onClick={handleShow}>
                Reactivate Account
            </Button>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Reactivate your account?</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <p style={{ color: "red", fontWeight: "bold" }}>
                        If you reactivate your account the following will apply:
                    </p>
                    <ul>
                        <li>Your account will now appear in searches and feeds</li>
                        <li>All your listings and past contracts will now be visible</li>
                        <li>Any prior images associated with your account cannot be recovered</li>
                    </ul>
                </Modal.Body>
                <Modal.Footer>
                    <p style={{ color: "red" }}>{formMessage}</p>
                    <Button variant="secondary" onClick={handleClose}>
                        Keep my account deactive
                    </Button>
                    <Button variant="primary" onClick={handleDeactivate}>
                        Reactivate my account anyways
                    </Button>
                </Modal.Footer>
            </Modal>
        </div>);
}

export default AccountReactivate;