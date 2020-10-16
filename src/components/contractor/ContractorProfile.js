import React from "react";

import FeedList from "./FeedList";
import ReviewList from "./ReviewList";

const ContractorProfile = () => {
    return (
        <div style={{ border: "solid", padding: "5px" }}>
            <h1>ContractorProfile component</h1>
            <div style={{ paddingLeft: "50px" }}>
                <FeedList />
                <ReviewList />
            </div>
        </div>
    );
}

export default ContractorProfile;