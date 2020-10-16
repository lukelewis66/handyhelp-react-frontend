import React from "react";

const SearchContractorsItem = ({ props }) => {
    return (
        <div className="component-border" style={{ width: "40%" }}>
            <h3>SearchContractorsItem component</h3>
            <ul>
                <li>{props.name}</li>
                <li>{props.rating}</li>
                <li>{props.skilltags}</li>
            </ul>
        </div>
    );
}

export default SearchContractorsItem;