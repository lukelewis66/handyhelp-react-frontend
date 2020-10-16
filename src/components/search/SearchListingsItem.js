import React from "react";

const SearchListingsItem = ({ props }) => {
    return (
        <div className="component-border" style={{ width: "40%" }}>
            <h3>SearchListingsItem component</h3>
            <ul>
                <li>{props.description}</li>
                <li>{props.image}</li>
                <li>{props.skilltags}</li>
            </ul>
        </div>
    );
}

export default SearchListingsItem;