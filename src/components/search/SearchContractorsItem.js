import React from "react";
import { Link } from 'react-router-dom';

const SearchContractorsItem = ({ props }) => {

    var fullLink = "contractors/UID=";
    fullLink += props.UID;

    return (
        <div className="component-border">
            <h3>SearchContractorsItem component</h3>
            <ul>
                <li>{props.name}</li>
                <li>{props.rating}</li>
                <li>{props.skilltags}</li>
            </ul>
            <Link to={fullLink}>
                <button type="button" class="btn btn-primary">Learn More</button>
            </Link>
        </div>
    );
}

export default SearchContractorsItem;