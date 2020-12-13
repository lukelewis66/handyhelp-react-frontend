import emailjs from "emailjs-com";
import React, { useState } from "react";
import { getUserEmail, getUserName } from "../firebase/accountFunctions";
import { Modal, Button, Form } from "react-bootstrap";

const Message = (props) => {
    
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    function sendEmail(e) {
        e.preventDefault();
        var toEmail = "";
        var toName = "";
        var fromName = "";
        var message = e.target.message.value;
        var reply_to = e.target.reply_to.value;
        var initialFormData = {};
        
        console.log("UID given to Message component: ", props.UID);
        getUserEmail(props.UID)
            .then((data) => {
                toEmail = data; 
                console.log("toEmail:", toEmail);
            })
            .then(() => {
                getUserName(props.UID)
                .then((data) => {
                    toName = data; 
                    console.log("toName:", toName);
                    getUserName(localStorage.getItem("UID"))
                        .then((data) => {
                            fromName = data; 
                            console.log("fromName:", fromName);
                            initialFormData = {
                                to_email: toEmail,
                                to_name: toName,
                                from_name: fromName,
                                message: message,
                                reply_to: reply_to
                            }
                            console.log("initialFormData: ", initialFormData);
                            console.log("formData before submit: ", initialFormData);
                            emailjs.send('gmail', 'template_bevlzxn', initialFormData, 'user_RVInqwMmvj4L0YbqyZ0eJ')
                            .then((result) => {
                                console.log(result.text);
                            }, (error) => {
                                console.log(error.text);
                            });
                        })
                }) 
            })
        e.target.reset();
        handleClose();
    }

    return (
        <div className = "">
            <Button variant="primary" onClick={handleShow} className = "messageButt">
                Send Message
            </Button>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Enter Message Info</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form onSubmit={sendEmail}>
                        <Form.Label>Body:</Form.Label>
                        <Form.Group>
                            <Form.Control
                                placeholder="Ex: Hey I'm interested in doing business with you!"
                                name="message"
                            />
                            <Form.Text className="text-muted">Enter a descriptive body for your message</Form.Text>
                        </Form.Group>
                        <Form.Group>
                            <Form.Label>Optional: provide an email for them to respond to</Form.Label>
                            <Form.Control
                                placeholder="Ex: handyhelpuser@gmail.com"
                                name="reply_to"
                            />
                            <Form.Text className="text-muted">Note: no reply email provided means they will have to find your profile on HandyHelp to reply!</Form.Text>
                        </Form.Group>
                        <input type="submit" value="Send" />
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                </Modal.Footer>
            </Modal>
        </div >
    );
}

export default Message