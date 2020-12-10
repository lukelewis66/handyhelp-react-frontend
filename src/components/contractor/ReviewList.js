import React, { useState, useEffect } from "react";
import ReviewItem from "./ReviewItem";
import { getReviews } from "../../firebase/Contractor";
import MakeReviewModal from "../pages/MakeReviewModal";


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
            <div className = "reviews">
                {reviewItems.map((item) => (
                    <ReviewItem key={item.id} props={item} />
                ))}
                <MakeReviewModal></MakeReviewModal>
            </div>
        </div>
    );
}

export default ReviewList;