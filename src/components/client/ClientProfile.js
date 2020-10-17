import React, { useState } from "react";

import { Nav } from "react-bootstrap";

import ClientListingList from "./ClientListingList";
import ClientEditProfile from "./ClientEditProfile";


const ClientProfile = () => {
    const [active, setActive] = useState("CurrentListings");

    const showActive = () => {
        switch (active) {
            case "PastListings":
                return <ClientListingList active={false} />;
            case "Edit":
                return <ClientEditProfile />;
            default:
                return <ClientListingList active={true} />;
        }
    }
    return (
        <div className="component-border">
            <h1>ClientProfile component</h1>
            <Nav variant="tabs" activeKey={active} onSelect={(activeKey) => setActive(activeKey)}>
                <Nav.Item >
                    <Nav.Link eventKey="CurrentListings">Current Listings</Nav.Link>
                </Nav.Item>
                <Nav.Item >
                    <Nav.Link eventKey="PastListings">Past Listings</Nav.Link>
                </Nav.Item>
                <Nav.Item >
                    <Nav.Link eventKey="Edit">Edit Profile</Nav.Link>
                </Nav.Item>
            </Nav>
            {showActive()}
        </div>
    );
}

export default ClientProfile;