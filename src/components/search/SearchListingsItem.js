import React from "react";
import { Link } from 'react-router-dom';
const SearchListingsItem = ({ props }) => {

    var fullLink = "listing/?UID=";
    fullLink += props.UID;
    return (
        <div className="component-border">
            <h3>SearchListingsItem component</h3>
            <ul>
                <li>{props.description}</li>
                <li>{props.image}</li>
                <li>{props.skilltags}</li>
            </ul>
            <Link to={fullLink}>
                <button type="button" class="btn btn-primary">Learn More</button>
            </Link>
        </div>
    );
}

export default SearchListingsItem;