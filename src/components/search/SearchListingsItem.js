import React from "react";
import { Link } from 'react-router-dom';
import { Card, Button } from "react-bootstrap";
import { SKILLTAG_PILLS } from "../../constants/skilltags";

const SearchListingsItem = ({ props }) => {

    var fullLink = "listing/LID=";
    fullLink += props.id;

    const showTags = () => {
        return props.skilltags.map(tag => (
            SKILLTAG_PILLS[tag]
        ));
    }
    return (
        < Card className="listing-card" variant="outlined" >
            <Card.Body style={{ display: "flex", alignItems: "center" }}>
                <img className="listing-photo" src={props.images[0] ? props.images[0] : "/hammer-icon.jpg"} alt="ClientListingImage" />
                <div>
                    <Card.Title>{props.title}</Card.Title>
                    <Card.Subtitle className="mb-2 text-muted">{props.location_string}</Card.Subtitle>
                    <div>
                        {showTags()}
                    </div>
                    <Card.Text>
                        {props.description}
                    </Card.Text>
                    <Button as={Link} to={fullLink}>Learn More</Button>
                </div>
            </Card.Body>
        </Card >
    );
}

export default SearchListingsItem;