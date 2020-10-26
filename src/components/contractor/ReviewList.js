import React from "react";

import ReviewItem from "./ReviewItem";

const ReviewList = () => {
    const fakeReviewItems = [
        { id: 1, rating: "rating 1", comment: "comment 1", reviewImage: "https://handyhelpimages.s3-us-west-1.amazonaws.com/reviewItem1.jpg" },
        { id: 2, rating: "rating 2", comment: "comment 2", reviewImage: "https://handyhelpimages.s3-us-west-1.amazonaws.com/reviewItem2.jpg" },
        { id: 3, rating: "rating 3", comment: "comment 3", reviewImage: "https://handyhelpimages.s3-us-west-1.amazonaws.com/reviewItem3.jpg" },
        { id: 4, rating: "rating 4", comment: "comment 4", reviewImage: "https://handyhelpimages.s3-us-west-1.amazonaws.com/reviewItem4.jpg" },
    ];

    return (
        <div className="component-border">
            <h1>ReviewList component</h1>
            <div className="flex-list">
                {fakeReviewItems.map((item) => (
                    <ReviewItem key={item.id} props={item} />
                ))}
            </div>
        </div>
    );
}

export default ReviewList;