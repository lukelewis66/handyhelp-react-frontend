import React from "react";

const ReviewItem = ({ props }) => {
    return (
        <div className="component-border">
            <h3>ReviewItem component</h3>
            <ul>
                <li>{props.rating}</li>
                <li>{props.comment}</li>
                <img alt={props.reviewImage} className="itemPhoto" src={props.reviewImage} />
            </ul>
        </div>
    );
}

export default ReviewItem;