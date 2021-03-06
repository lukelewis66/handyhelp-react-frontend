import React, { useState } from "react";
import { Button, Modal, Form, Spinner } from "react-bootstrap";
import { useToasts } from "react-toast-notifications";
/// for BucketInit(UID) function
import BucketInit from '../BucketInit';

import { signUp } from "../firebase/authFunctions";

const SignUp = () => {
    const [spinnerActive, setSpinnerActive] = useState(false);
    //https://react-bootstrap.github.io/components/modal/
    const [form, setForm] = useState({
        email: "",
        password: "",
        confirm_password: "",
    })

    const { addToast } = useToasts();
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const handleChange = (e, field) => {
        const val = e.target.value;
        setForm((prevState) => ({
            ...prevState,
            [field]: val
        }))
    }

    const handleSignUp = () => {

        if (
            form.email === "" ||
            form.password === "" ||
            form.confirm_password === ""
        ) {
            var content = "All fields must be filled";
            addToast(content, {
                appearance: 'error',
                autoDismiss: true,
            });
        } else if (form.password !== form.confirm_password) {
            var content = "Passwords do not match";
            addToast(content, {
                appearance: 'error',
                autoDismiss: true,
            });
        } else {
            setSpinnerActive(true);
            console.log("calling signup....");
            signUp(form.email, form.password)
                .then(() => BucketInit(localStorage.getItem("UID")).then(() => {
                    setSpinnerActive(false);
                    window.location.assign("/")
                }))
                /// calling test version of bucket initialization here
                /// end test
                //.catch((err) => setFormMessage(err));
                .catch((err) => {
                    var content = "Email badly formatted"
                    addToast(content, {
                        appearance: 'error',
                        autoDismiss: true,
                    });
                });
        }
    }

    return (
        <div>
            <Button className="sign-button" variant="primary" onClick={handleShow}>
                Sign Up
          </Button>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Sign Up</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                        <Form.Group>
                            <Form.Label>Email address</Form.Label>
                            <Form.Control type="email" placeholder="Enter email" autoComplete="email" onChange={(e) => handleChange(e, "email")} />
                        </Form.Group>
                        <Form.Group>
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="password" placeholder="Enter Password" autoComplete="new-password" onChange={(e) => handleChange(e, "password")} />
                        </Form.Group>
                        <Form.Group>
                            <Form.Label>Confirm Password</Form.Label>
                            <Form.Control type="password" autoComplete="new-password" onChange={(e) => handleChange(e, "confirm_password")} />
                        </Form.Group>
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    {/* <p style={{ color: "red" }}>{formMessage}</p> */}
                    <Button variant="secondary" onClick={handleClose}>
                        Close
              </Button>
                    <Button variant="primary" onClick={handleSignUp}>

                        Sign Up
              </Button>
                    {spinnerActive ? <Spinner animation="border" /> : null}
                </Modal.Footer>
            </Modal>
        </div>
    );
};

export default SignUp;