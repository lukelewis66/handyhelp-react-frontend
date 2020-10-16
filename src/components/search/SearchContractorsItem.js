import React from "react";

const SearchContractorsItem = ({ props }) => {
    return (
        <div className="component-border">
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