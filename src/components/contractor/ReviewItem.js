import React from "react";

const ReviewItem = ({ props }) => {
    return (
        <div>
            <ul>
                <li>{props.rating}</li>
                <li>{props.comment}</li>
                <img alt={props.reviewImage} className="itemPhoto" src={props.reviewImage} />
            </ul>
        </div>
    );
}

export default ReviewItem;