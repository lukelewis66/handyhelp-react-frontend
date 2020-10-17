import React, { useState, useEffect } from "react";

import FeedList from "./FeedList";
import ReviewList from "./ReviewList";
import ContractorEditProfile from "./ContractorEditProfile";

import { Nav } from "react-bootstrap";
//https://react-bootstrap.netlify.app/components/navs/

const ContractorProfile = () => {
    const [active, setActive] = useState("Feed");

    const showActive = () => {
        switch (active) {
            case "Reviews":
                return <ReviewList />
            case "Edit":
                return <ContractorEditProfile />
            default:
                return <FeedList />
        }
    }
    return (
        <div className="component-border">
            <h1>ContractorProfile component</h1>
            <Nav variant="tabs" activeKey={active} onSelect={(activeKey) => setActive(activeKey)}>
                <Nav.Item >
                    <Nav.Link eventKey="Feed">Feed</Nav.Link>
                </Nav.Item>
                <Nav.Item >
                    <Nav.Link eventKey="Reviews">Reviews</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link eventKey="Edit">Edit Profile</Nav.Link>
                </Nav.Item>
            </Nav>
            {showActive()}
        </div>
    );
}

export default ContractorProfile;