import React from "react";
import { Link } from 'react-router-dom';
import { Card, Button } from "react-bootstrap";

const SearchListingsItem = ({ props }) => {

    var fullLink = "listing/LID=";
    fullLink += props.id;
    return (
        < Card className="cardStyle" variant="outlined" >
            <Card.Body>
                <Card.Img className="itemPhoto" variant="top" src={props.images[0] ? props.images[0] : "/hammer-icon.jpg"} alt="ClientListingImage" />
                <Card.Title>{props.title}</Card.Title>
                <Card.Text>
                    {props.description}
                    {props.skilltags}
                </Card.Text>
                <Button as={Link} to={fullLink}>Learn More</Button>
            </Card.Body>
        </Card >
    );
}

export default SearchListingsItem;