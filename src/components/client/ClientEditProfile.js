import React, { useEffect, useState, useRef } from "react";
import {Form, Button} from "react-bootstrap";

import { checkUserActive, editInfo } from "../../firebase/accountFunctions";

import AccountDeactivate from "../account/AccountDeactivate";

import AccountReactivate from "../account/AccountReactivate";

import {getUserInfo} from "../../Users/Client";

const ClientEditProfile = () => {

    const [active, setActive] = useState();
    useEffect(() => {
        checkUserActive(localStorage.getItem("UID"))
            .then((data) => {
                if(data.active) {
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
    },[]);

    const nameRef = useRef();
    const phoneRef = useRef();
    const emailRef = useRef();

    const handleClick = (e) => {
        var name = nameRef.current.value ? nameRef.current.value : userInfo.name;
        var phone = phoneRef.current.value ? phoneRef.current.value : userInfo.phone;
        var email = emailRef.current.value ? emailRef.current.value : userInfo.email;
        console.log(name, phone, email);
        editInfo(name,phone,email,localStorage.getItem("UID")).then(window.location.reload());
        e.preventDefault();
    }

    return(
        <div>
            <Form className = "formStyle">
            <Form.Label>Blank Fields Will Be Unchanged</Form.Label>
                <Form.Group>
                    <Form.Label>Name</Form.Label>
                    <Form.Control type = "text" placeholder = "Enter Name" autoComplete = "name" id = "name" ref={nameRef}/>
                </Form.Group>
                <Form.Group>
                    <Form.Label>Phone</Form.Label>
                    <Form.Control type = "text" placeholder = "Enter Phone Number" autoComplete = "tel" id = "phone" ref={phoneRef}/>
                </Form.Group>
                <Form.Group>
                <Form.Label>Email</Form.Label>
                <Form.Control type = "email" placeholder = "Enter Email" autoComplete = "email" id = "email" ref={emailRef}/>
                </Form.Group>
                <Button variant="primary" type="submit" id = "submitButton" onClick = {handleClick}>
                    Submit
                </Button>
                {active}
            </Form>
            
        </div>
    )   
}

export default ClientEditProfile;