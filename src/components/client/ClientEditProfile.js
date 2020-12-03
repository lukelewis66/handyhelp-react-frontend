import React, { useEffect, useState, useRef } from "react";
import { Form, Button } from "react-bootstrap";
import { checkUserActive, editInfo } from "../../firebase/accountFunctions";
import AccountDeactivate from "../account/AccountDeactivate";
import AccountReactivate from "../account/AccountReactivate";
import { getUserInfo } from "../../firebase/Client";
import MakeListingModal from "./MakeListingModal";
import { useToasts } from "react-toast-notifications";

const ClientEditProfile = () => {

    const [active, setActive] = useState();
    useEffect(() => {
        checkUserActive(localStorage.getItem("UID"))
            .then((data) => {
                if (data.active) {
                    setActive(<AccountDeactivate />);
                }
                else {
                    setActive(<AccountReactivate />);
                }
            })
    }, [])

    const [userInfo, setUserinfo] = useState([]);
    useEffect(() => {
        getUserInfo(localStorage.getItem("UID")).then((data) => {
            setUserinfo(data);

        })
    }, []);

    const [formMessage, setFormMessage] = useState("");
    const { addToast } = useToasts();

    const nameRef = useRef();
    const phoneRef = useRef();

    const handleClick = (e) => {
        var name = nameRef.current.value;
        var phone = phoneRef.current.value;
        if(name === "" || phone === "") {
            var content = "All fields must be filled";
            addToast(content, {
                appearance: 'error',
                autoDismiss: true,
            });
            setFormMessage("All fields must be filled");
        }
        else {
            editInfo(name, phone, localStorage.getItem("UID")).then(() => window.location.reload());
        }      
        e.preventDefault();
    }

    return (
        <div>
            <div className="tabStyleEdit">
                <Form className="formStyle">
                    <Form.Group>
                        <Form.Label>Email</Form.Label>
                        <Form.Control value = {userInfo.email} disabled/>
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>Name</Form.Label>
                        <Form.Control type="text" defaultValue = {userInfo.name} placeholder="Enter Name" autoComplete="name" id="name" ref={nameRef} />
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>Phone</Form.Label>
                        <Form.Control type="text" defaultValue = {userInfo.phone} placeholder="Enter Phone Number" autoComplete="tel" id="phone" ref={phoneRef} />
                    </Form.Group>
                    <Button variant="primary" type="submit" id="submitButton" onClick={handleClick}>
                        Submit
                    </Button>
                    {active}
                </Form>
                
            </div>
        </div>
    )
}

export default ClientEditProfile;
