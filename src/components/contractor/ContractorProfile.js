import React, { useState, useEffect } from "react";

import FeedList from "./FeedList";
import ReviewList from "./ReviewList";
import ContractorEditProfile from "./ContractorEditProfile";
import ContractorPhoto from "./ContractorPhoto"
import ContractorInfo from "./ContractorInfo"
import { ToastProvider } from "react-toast-notifications";
import { Nav } from "react-bootstrap";
import { getAllFeedItems, getReviews } from "../../firebase/Contractor";

//https://react-bootstrap.netlify.app/components/navs/

const ContractorProfile = () => {
    const [active, setActive] = useState("Feed");
    const [feedItems, setFeedItems] = useState(null);
    const [reviewItems, setReviewItems] = useState(null);

    useEffect(() => {
        const UID = localStorage.getItem("UID");
        getAllFeedItems(UID).then((feeds) => {
            setFeedItems(feeds);
        });
        getReviews(UID).then((reviews) => {
            setReviewItems(reviews);
        });
    }, []);

    const refreshFeed = () => {
        getAllFeedItems(localStorage.getItem("UID")).then((feeds) => {
            setFeedItems(feeds);
        })
    }

    const showActive = () => {
        switch (active) {
            case "Reviews":
                return <ToastProvider placement='bottom-center'><ReviewList reviewItems={reviewItems} /></ToastProvider>
            case "Edit":
                return <ToastProvider placement='bottom-center'> <ContractorEditProfile /> </ToastProvider>
            default:
                return <ToastProvider placement='bottom-center'> <FeedList feedItems={feedItems} refreshFeed={refreshFeed} /></ToastProvider>
        }
    }
    return (
        <div>
            <div>
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
