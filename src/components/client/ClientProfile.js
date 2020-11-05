import React, { useState } from "react";

import { Nav } from "react-bootstrap";

import ClientListingList from "./ClientListingList";
import ClientInactiveListingList from "./ClientInactiveListing";
import ClientEditProfile from "./ClientEditProfile";
import ClientPhoto from "./ClientPhoto"
import ClientInfo from "./ClientInfo"


const ClientProfile = () => {
    const [active, setActive] = useState("CurrentListings");

    const showActive = () => {
        switch (active) {
            case "PastListings":
                return <ClientInactiveListingList active={false} />;
            case "Edit":
                return <ClientEditProfile />;
            default:
                return <ClientListingList active={true} />;
        }
    }
    /*
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
    */

    return (
       <div>
	    <div className = "profileHeader">
	    	<ClientPhoto />
	    	<ClientInfo />
	    </div>
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
