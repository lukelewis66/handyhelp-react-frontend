import React from "react";

const FeedItem = ({ props }) => {

    return (
        <div className="component-border">
            <h3>FeedItem component</h3>
            <ul>
                <li>{props.description}</li>
                <img alt={props.image} className="itemPhoto" src={props.image} />
                <li>{props.skilltags}</li>
            </ul>
        </div>
    );
}

export default FeedItem;