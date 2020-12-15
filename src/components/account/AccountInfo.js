import React, { useRef, useEffect } from "react";

import { Form } from "react-bootstrap";

import GeoSearchBar from "../search/GeoSearchBar";


const AccountInfo = ({ formData, handleChange, handleAccountTypeSelection, handleCoordinates }) => {
    const nameRef = useRef();
    const phoneRef = useRef();
    const clientRef = useRef();
    const contractorRef = useRef();

    useEffect(() => {
        nameRef.current.value = (formData.name);
        phoneRef.current.value = formData.phone;
        if (formData.role === "client") {
            clientRef.current.checked = true;
        }
        else if (formData.role === "contractor") {
            contractorRef.current.checked = true;
        }
    }, []);

    return (
        <div>
            <Form>
                <Form.Group>
                    <Form.Label>Full Name</Form.Label>
                    <Form.Control placeholder="Enter your name" autoComplete="name" ref={nameRef} onChange={(e) => handleChange(e, "name")} />
                </Form.Group>
                <Form.Group>
                    <Form.Label>Phone Number</Form.Label>
                    <Form.Control type="text" placeholder="Enter your phone number" autoComplete="phone" ref={phoneRef} onChange={(e) => handleChange(e, "phone")} />
                </Form.Group>
                {/* Doesn't work, just click use current location for now */}
                <Form.Group>
                    <Form.Label>City</Form.Label>
                    <GeoSearchBar prevLocationSelected={formData.location_string} handleCoordinates={handleCoordinates} />
                </Form.Group>

                <Form.Group>
                    <Form.Label>Account Type
                    <Form.Text style={{ background: "yellow" }}>Choose wisely! You cannot change this once you have set up your account.</Form.Text>
                    </Form.Label>
                    <Form.Check
                        type="radio"
                        label="Client"
                        name="typeSelect"
                        id="selectClient"
                        ref={clientRef}
                        onClick={() => handleAccountTypeSelection("client")}
                    />
                    <Form.Text className="text-muted">A client account can create listings which contractors can see and respond to.</Form.Text>
                    <Form.Check
                        type="radio"
                        label="Contractor"
                        name="typeSelect"
                        id="selectContractor"
                        ref={contractorRef}
                        onClick={() => handleAccountTypeSelection("contractor")}
                    />
                    <Form.Text className="text-muted">A contractor account can search and respond to listings, and be searched for by all users.</Form.Text>
                </Form.Group>
            </Form>
        </div>);
}

export default AccountInfo;