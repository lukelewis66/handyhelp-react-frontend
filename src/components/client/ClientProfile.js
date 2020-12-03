import React, { useState } from "react";

import { Nav } from "react-bootstrap";

import ClientListingList from "./ClientListingList";
import ClientInactiveListingList from "./ClientInactiveListing";
import ClientEditProfile from "./ClientEditProfile";
import ClientPhoto from "./ClientPhoto"
import ClientInfo from "./ClientInfo"
import { ToastProvider } from "react-toast-notifications";



const ClientProfile = () => {
    const [active, setActive] = useState("CurrentListings");

    const showActive = () => {
        switch (active) {
            case "PastListings":
                return <ClientInactiveListingList active={false} />;
            case "Edit":
                return <ToastProvider placement='bottom-center'> <ClientEditProfile /> </ToastProvider>
            default:
                return <ClientListingList active={true} />;
        }
    }

    return (
       <div>
	    <div>
	    	<ClientInfo />
	    </div>
            <Nav fill variant="tabs" className = "tabsStyle" activeKey={active} onSelect={(activeKey) => setActive(activeKey)}>
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
