import React from "react";
import ReviewItem from "./ReviewItem";
import MakeReviewModal from "../pages/MakeReviewModal";
import { Spinner } from "react-bootstrap";


const ReviewList = ({ reviewItems }) => {

    const showReviews = () => {
        if (reviewItems === null) {
            return <Spinner animation="border" />
        }
        else {
            if (reviewItems.length === 0) {
                return <h3>No reviews.</h3>
            }
            else {
                return reviewItems.map((item) => (
                    <ReviewItem key={item.id} props={item} />
                ));
            }
        }
    }
    return (
        <div className="tabStyle" style={{margin: "0% 13% 1% 13%"}}>
            <div className="reviews">
                {showReviews()}
            </div>
        </div>
    );
}

export default ReviewList;