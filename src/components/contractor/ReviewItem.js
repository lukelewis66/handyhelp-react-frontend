import React from "react";

const ReviewItem = ({ props }) => {
    return (
        <div className="component-border">
            <h3>ReviewItem component</h3>
            <ul>
                <li>{props.rating}</li>
                <li>{props.comment}</li>
                <li>{props.reviewImage}</li>
            </ul>
        </div>
    );
}

export default ReviewItem;