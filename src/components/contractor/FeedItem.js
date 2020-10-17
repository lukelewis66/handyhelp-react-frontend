import React from "react";

const FeedItem = ({ props }) => {

    return (
        <div className="component-border">
            <h3>FeedItem component</h3>
            <ul>
                <li>{props.description}</li>
                <li>{props.image}</li>
                <li>{props.skilltags}</li>
            </ul>
        </div>
    );
}

export default FeedItem;