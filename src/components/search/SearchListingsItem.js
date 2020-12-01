import React from "react";
import { Link } from 'react-router-dom';
import { Card, Button } from "react-bootstrap";
import { SKILLTAG_PILLS } from "../../constants/skilltags";
import Message from "../Message";

const SearchListingsItem = ({ props }) => {

    var fullLink = "listing/LID=";
    fullLink += props.id;

    const showTags = () => {
        return props.skilltags.map(tag => (
            SKILLTAG_PILLS[tag]
        ));
    }
    return (
        < Card className="cardStyle" variant="outlined" >
            <Card.Body>
                <Card.Img className="itemPhoto" variant="top" src={props.images[0] ? props.images[0] : "/hammer-icon.jpg"} alt="ClientListingImage" />
                <Card.Title>{props.title}</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">{props.location_string}</Card.Subtitle>
                {showTags()}
                <Card.Text>
                    {props.description}
                    {props.skilltags}
                </Card.Text>
                <Message UID={props.client}/>
                <Button as={Link} to={fullLink}>Learn More</Button>
            </Card.Body>
        </Card >
    );
}

export default SearchListingsItem;