import React, { useState, useEffect } from "react";

import { Button, Modal, Form } from "react-bootstrap";

import AccountInfo from "./AccountInfo";
import AccountConfirm from "./AccountConfirm";

const AccountSetup = ({ UID }) => {
    const [body, setBody] = useState({
        buttonText: "Got It",
        render: "It looks like this might be your first time signing in. Let's fill out some information to properly set up your account.",
        prev: false,
    })
    const [current, setCurrent] = useState("start");
    const [form, setForm] = useState({
        role: "",
        name: "",
        phone: "",
        location: [],
    });
    const [errorMessage, setErrorMessage] = useState("");

    const handleAccountTypeSelection = (accountType) => {
        console.log("account type select: ", accountType);
        setForm((prevState) => ({
            ...prevState,
            role: accountType,
        }));
    }

    const handleChange = (e, field) => {
        let val = e.target.value;
        console.log("handle change val: ", val);
        //copies previous form state, and updates the changed form field
        setForm((prevState) => ({
            ...prevState,
            [field]: val
        }))
    }

    function handleCoordinates(lat, lng) {
        setForm((prevState) => ({
            ...prevState,
            location: [lat, lng],
        }))
    }

    useEffect(() => {
        switch (current) {
            case "start":
                break;
            case "info":
                setBody({
                    buttonText: "Next",
                    render: <AccountInfo formData={form} handleChange={handleChange} handleAccountTypeSelection={handleAccountTypeSelection} handleCoordinates={handleCoordinates} />,
                    prev: false,
                })
                break;
            case "submit":
                setBody({
                    buttonText: "Submit",
                    render: <AccountConfirm formData={form} />,
                    prev: true,
                })
            default:
                break;
        }
    }, [current]);

    const handleNextClick = () => {
        switch (current) {
            case "start":
                setCurrent("info");
                break;
            case "info":
                let fieldError = false;
                for (const [key] of Object.entries(form)) {
                    if (form[key] === "" || form[key] === []) {
                        setErrorMessage("All fields need to be filled");
                        fieldError = true;
                        break;
                    }
                }
                if (!fieldError) {
                    setErrorMessage("");
                    setCurrent("submit");
                }
                break;
            case "submit":
                //do Submit
                break;
        }
    }

    const handlePrevClick = () => {
        setCurrent("info");
    }

    return (
        <Modal size="lg" show={true} backdrop="static" >
            <Modal.Header><b>Let's get you set up.</b></Modal.Header>
            <Modal.Body>{body.render}</Modal.Body>
            <Modal.Footer>
                <p style={{ color: "red" }}>{errorMessage}</p>
                {body.prev ? <Button onClick={handlePrevClick}>Previous</Button> : null}
                <Button onClick={handleNextClick}>{body.buttonText}</Button>
            </Modal.Footer>
        </Modal>);
}

export default AccountSetup;