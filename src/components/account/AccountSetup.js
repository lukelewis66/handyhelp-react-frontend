import React, { useState, useEffect } from "react";

import { Button, Container } from "react-bootstrap";
import { createAccount, checkUserExists } from "../../firebase/accountFunctions";
import { getCityName } from "../../gmaps/geocode";

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
        location_string: "",
        email: localStorage.getItem("email"),
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
        //copies previous form state, and updates the changed form field
        setForm((prevState) => ({
            ...prevState,
            [field]: val
        }))
    }

    function handleCoordinates(lat, lng) {
        getCityName(lat, lng).then(cityName => {
            setForm((prevState) => ({
                ...prevState,
                location: [lat, lng],
                location_string: cityName,
            }))
        })
    }

    //in case someone tries route /setupaccount even though they already have an account set up.
    //this will redirect them to the home page. 
    useEffect(() => {
        checkUserExists(UID)
            .then(data => {
                if (data.exists) {
                    window.location.assign("/");
                }
            })
    }, [])

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

    function handleSubmit() {
        createAccount(UID, form).then(window.location.assign("/"));
    }
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
                handleSubmit();
                break;
        }
    }

    const handlePrevClick = () => {
        setCurrent("info");
    }

    return (
        <div >
            <Container style={{ display: "flex", flexDirection: "column" }}>
                <div>
                    {body.render}
                </div>
                <div style={{ display: "flex" }}>
                    <p style={{ color: "red" }}>{errorMessage}</p>
                    {body.prev ? <Button onClick={handlePrevClick}>Previous</Button> : null}
                    <Button onClick={handleNextClick}>{body.buttonText}</Button>
                </div>
            </Container>
        </div>);
}

export default AccountSetup;