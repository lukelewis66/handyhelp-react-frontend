import React, { useState, useEffect } from "react";

import { Button, Modal, Form } from "react-bootstrap";

import AccountType from "./AccountType";
import AccountInfo from "./AccountInfo";

const AccountSetup = ({ UID }) => {
    const [body, setBody] = useState({
        buttonText: "Got It",
        render: "It looks like this might be your first time signing in. Let's fill out some information to properly set up your account.",
        prev: false,
    })
    const [current, setCurrent] = useState("start");
    const [form, setForm] = useState({
        accountType: "",
        name: "",
        phone: "",
        location: [],
        skilltags: [],
    });

    useEffect(() => {
        switch (current) {
            case "start":
                break;
            case "type":
                setBody({
                    buttonText: "Next",
                    render: <AccountType formData={form} handleChange={handleChange} />,
                    prev: false,
                });
                break;
            case "info":
                setBody({
                    buttonText: "Submit",
                    render: <AccountInfo formData={form} handleChange={handleChange} />,
                    prev: true,
                })
                break;
            default:
                break;
        }
    }, [current]);

    const handleNextClick = () => {
        switch (current) {
            case "start":
                setCurrent("type");
                break;
            case "type":
                setCurrent("info");
                break;
            case "info":
                //submit
                break;
        }
    }

    const handlePrevClick = () => {
        setCurrent("type");
    }

    const handleChange = (e, field) => {
        let val;
        if (field === "skilltags") {
            val = [...form.skilltags];
            const curTag = e.target.value;
            if (val.some((tag) => tag === curTag)) {
                val.splice(val.indexOf(curTag), 1);
            }
            else {
                val.push(e.target.value);
            }
        }
        else {
            val = e.target.value;
        }
        //copies previous form state, and updates the changed form field
        setForm((prevState) => ({
            ...prevState,
            [field]: val
        }))
    }
    return (
        <Modal show={true} backdrop="static" size="lg">
            <Modal.Header><b>Let's get you set up.</b></Modal.Header>
            <Modal.Body>{body.render}</Modal.Body>
            <Modal.Footer>{body.prev ? <Button onClick={handlePrevClick}>Previous</Button> : null}<Button onClick={handleNextClick}>{body.buttonText}</Button></Modal.Footer>
        </Modal>);
}

export default AccountSetup;