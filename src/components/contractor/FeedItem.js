import React, { useState } from "react";

const FeedItem = ({ props }) => {

    return (
        <div style={{ border: "solid", padding: "5px" }}>
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