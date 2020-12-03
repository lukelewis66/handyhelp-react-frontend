import React, { useState } from "react";
import { useToasts } from "react-toast-notifications";
import { Button, Modal, Form } from "react-bootstrap";
import { signIn, getUID } from "../firebase/authFunctions";




const SignIn = () => {
    //https://react-bootstrap.github.io/components/modal/
    const [form, setForm] = useState({
        email: "",
        password: "",
    })
    const [formMessage, setFormMessage] = useState("");
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

    const handleSignIn = () => {
        if (
            form.email === "" ||
            form.password === "" ||
            form.confirm_password === ""
        ) {
            setFormMessage("All fields must be filled");
            var content = "All fields must be filled";
            addToast(content, {
                appearance: 'error',
                autoDismiss: true,
            });
        }
        else {
            signIn(form.email, form.password)
                .then((msg) => {
                    //msg would be "success"
                    window.location.assign("/");
                })
                //.catch((err) => setFormMessage(err));
                .catch((err) => {
                    setFormMessage(err);
                    var content = "Invalid sign in. Please try again"
                    addToast( content, {
                        appearance: 'error',
                        autoDismiss: true,
                    });
                });
        }
    }
    return (
        <div>
            <Button className="sign-button" variant="primary" onClick={handleShow}>
                Sign In
          </Button>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Sign In</Modal.Title>
                </Modal.Header>
                <Modal.Body><Form>
                    <Form.Group>
                        <Form.Label>Email address</Form.Label>
                        <Form.Control type="email" placeholder="Enter email" autoComplete="email" onChange={(e) => handleChange(e, "email")} />
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" placeholder="Enter Password" autoComplete="current-password" onChange={(e) => handleChange(e, "password")} />
                    </Form.Group>
                </Form></Modal.Body>
                <Modal.Footer>
                    {/* <p style={{ color: "red" }}>{formMessage}</p> */}
                    <Button variant="secondary" onClick={handleClose}>
                        Close
              </Button>
                    <Button variant="primary" onClick={handleSignIn}>
                        Sign In
              </Button>
                </Modal.Footer>
            </Modal>
        </div>
    );
};

export default SignIn;