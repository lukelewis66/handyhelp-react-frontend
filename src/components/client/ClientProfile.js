import React, { useState, useEffect } from "react";

import { Nav } from "react-bootstrap";

import ClientListingList from "./ClientListingList";
import ClientEditProfile from "./ClientEditProfile";
import ClientInfo from "./ClientInfo"
import { ToastProvider } from "react-toast-notifications";
import { getAllListings } from "../../firebase/Client";


const ClientProfile = () => {
    const [active, setActive] = useState("CurrentListings");
    const [activeListings, setActiveListings] = useState(null);
    const [inactiveListings, setInactiveListings] = useState(null);

    useEffect(() => {
        getAllListings(localStorage.getItem("UID"), true).then((actives) => {
            console.log("active listings retrieved: ", actives);
            setActiveListings(actives);
        })

        getAllListings(localStorage.getItem("UID"), false).then((inactives) => {
            console.log("inactive listings retreived: ", inactives);
            setInactiveListings(inactives);
        })
    }, []);

    const refreshListings = () => {
        getAllListings(localStorage.getItem("UID"), true).then((actives) => {
            console.log("active listings retrieved: ", actives);
            setActiveListings(actives);
        });

        getAllListings(localStorage.getItem("UID"), false).then((inactives) => {
            console.log("inactive listings retreived: ", inactives);
            setInactiveListings(inactives);
        })
    }

    const showActive = () => {
        switch (active) {
            case "PastListings":
                return <ClientListingList active={false} listings={inactiveListings} refreshListings={refreshListings} />;
            case "Edit":
                return <ToastProvider placement='bottom-center'> <ClientEditProfile /> </ToastProvider>
            default:
                return <ClientListingList active={true} listings={activeListings} refreshListings={refreshListings} />;
        }
    }

    return (
        <div>
            <div>
                <ClientInfo />
            </div>
            <Nav fill variant="tabs" className="tabsStyle" activeKey={active} onSelect={(activeKey) => setActive(activeKey)}>
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
