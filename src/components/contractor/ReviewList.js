import React, { useState, useEffect } from "react";
import ReviewItem from "./ReviewItem";
import { getReviews } from "../../firebase/Contractor";

const ReviewList = () => {

    const[reviewItems, setReviewList] = useState([]);
    useEffect(() => {
        getReviews(localStorage.getItem("UID")).then((list) => {
            console.log("reviews retrieved on ReviewList.js ", list);
            setReviewList(list);
        })
    }, []);

    return (
        <div className = "tabStyle">
            <h3>Your Reviews</h3>
            <div className = "flex-list">
                {reviewItems.map((item) => (
                    <ReviewItem key={item.id} props={item} />
                ))}
            </div>
        </div>
    );
}

export default ReviewList;