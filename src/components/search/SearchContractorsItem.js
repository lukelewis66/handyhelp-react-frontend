import React from "react";
import { Link } from 'react-router-dom';
import { Card, Button } from "react-bootstrap";
import { SKILLTAG_PILLS } from "../../constants/skilltags";

const SearchContractorsItem = ({ props }) => {

    var fullLink = "contractors/UID=";
    fullLink += props.id;

    const showTags = () => {
        return props.skilltags.map(tag => (
            SKILLTAG_PILLS[tag]
        ));
    }
    return (
        < Card className="contractor-card" variant="outlined" >
            <Card.Body className="contractor-card-body">
                <div style={{ display: "flex" }}>
                    <img className="contractor-search-image" src={props.profilepic ? props.profilepic : "/contractor-anon.jpg"} />
                    <div className="contractor-search-basicinfo">
                        <Card.Title>{props.name}</Card.Title>
                        <Card.Subtitle className="mb-2 text-muted">{props.location_string}</Card.Subtitle>
                    </div>
                </div>
                <div style={{ display: "flex", flexDirection: "column" }}>
                    <div style={{ display: "flex", marginBottom: "10px", marginTop: "10px" }}>
                        {showTags()}
                    </div>
                    {/* <Card.Text>
                    {props.email}<br />
                    {props.phone}<br />
                </Card.Text> */}
                    <Button as={Link} to={fullLink} target="_blank">View Profile</Button>
                </div>
            </Card.Body>
        </Card >
    );
}

export default SearchContractorsItem;