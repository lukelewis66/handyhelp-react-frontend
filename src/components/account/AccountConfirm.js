import React from "react";

import { Table } from "react-bootstrap";

const AccountConfirm = ({ formData }) => {
    console.log(formData);
    return (
        <div>
            <b>Confirm that the information below is correct.</b>
            <Table>
                <tbody>
                    <tr>
                        <td>Full Name</td>
                        <td>{formData.name}</td>
                    </tr>
                    <tr>
                        <td>Phone</td>
                        <td>{formData.phone}</td>
                    </tr>
                    <tr>
                        <td>Location</td>
                        <td>{formData.location}</td>
                    </tr>
                    <tr>
                        <td>Account Type</td>
                        <td>{formData.role}</td>
                    </tr>
                </tbody>
            </Table>
        </div>);
}

export default AccountConfirm;