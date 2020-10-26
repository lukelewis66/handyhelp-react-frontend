import React from "react";

const ClientListingItem = ({ props }) => {

    return (
        <div className="component-border">
            <h3>ClientListingItem component</h3>
            <ul>
                <li>{props.description}</li>
                <img alt="ClientListingItem image" className="itemPhoto" src={props.image}/>
                <li>{props.skilltags}</li>
            </ul>
        </div>
    );
}

export default ClientListingItem;