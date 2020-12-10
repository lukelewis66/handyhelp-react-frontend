import React, { useState } from "react";

import FeedList from "./FeedList";
import ReviewList from "./ReviewList";
import ContractorEditProfile from "./ContractorEditProfile";
import ContractorPhoto from "./ContractorPhoto"
import ContractorInfo from "./ContractorInfo"
import { ToastProvider } from "react-toast-notifications";
import { Nav } from "react-bootstrap";

//https://react-bootstrap.netlify.app/components/navs/

const ContractorProfile = () => {
    const [active, setActive] = useState("Feed");

    const showActive = () => {
        switch (active) {
            case "Reviews":
                return <ToastProvider placement='bottom-center'><ReviewList /></ToastProvider>
            case "Edit":
                return <ToastProvider placement='bottom-center'> <ContractorEditProfile /> </ToastProvider>
            default:
                return <ToastProvider placement='bottom-center'> <FeedList /></ToastProvider>
        }
    }
    return (
        <div>
            <div className="">
                <div className="profileHeader">
                    <ContractorPhoto />
                    <ContractorInfo />
                </div>
            </div>
            <Nav fill variant="tabs" className="tabsStyle" activeKey={active} onSelect={(activeKey) => setActive(activeKey)}>
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
