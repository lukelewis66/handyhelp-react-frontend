import React, { useState } from "react";
import { Button, Modal, Form } from "react-bootstrap";

import { signUp } from "../firebase/auth";

const SignUp = () => {
    //https://react-bootstrap.github.io/components/modal/
    const [form, setForm] = useState({
        email: "",
        password: "",
        confirm_password: "",
    })

    const [formMessage, setFormMessage] = useState("");

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
            setFormMessage("All fields must be filled");
        } else if (form.password !== form.confirm_password) {
            setFormMessage("Passwords do not match");
        } else {
            signUp(form.email, form.password)
                .then(() => window.location.assign("/"))
                .catch((err) => setFormMessage(err));
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
                    <p style={{ color: "red" }}>{formMessage}</p>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
              </Button>
                    <Button variant="primary" onClick={handleSignUp}>

                        Sign Up
              </Button>
                </Modal.Footer>
            </Modal>
        </div>
    );
};

export default SignUp;