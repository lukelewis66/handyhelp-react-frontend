import React from "react";
import { Form } from "react-bootstrap";

const AccountType = ({ formData, handleChange }) => {
    return (
        <Form>
            <Form.Group>
                <Form.Label>Full Name</Form.Label>
                <Form.Control placeholder="Enter your name" autoComplete="name" />
            </Form.Group>
            <Form.Group>
                <Form.Label>Phone Number</Form.Label>
                <Form.Control type="text" placeholder="Enter your phone number" autoComplete="phone" />
            </Form.Group>
            <Form.Group>
                <Form.Label>Account Type</Form.Label>
                <Form.Check
                    type="radio"
                    label="Client"
                    name="typeSelect"
                    id="selectClient"
                />
                <Form.Check
                    type="radio"
                    label="Contractor"
                    name="typeSelect"
                    id="selectContractor"
                />
            </Form.Group>
        </Form>
    );
}

export default AccountType;