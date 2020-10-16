import React from "react";

import FeedList from "./FeedList";
import ReviewList from "./ReviewList";

const ContractorProfile = () => {
    return (
        <div className="component-border">
            <h1>ContractorProfile component</h1>
            <FeedList />
            <ReviewList />
        </div>
    );
}

export default ContractorProfile;