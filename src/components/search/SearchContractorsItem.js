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

    function showRating() {
        if (props.ratingCount !== 0) {
            return <span className="rating-display">&#9734;{props.rating.toFixed(2)}</span>
        }
        else {
            return <span className="rating-display">No Ratings</span>
        }

    }
    return (
        < Card className="contractor-card" variant="outlined" >
            <Card.Body className="contractor-card-body">
                <div style={{ display: "flex" }}>
                    <div style={{ display: "flex", flexDirection: "column" }}>
                        

                        <img className="contractor-search-image" src={(props.profilepic.length >= 1) ? props.profilepic : "/contractor-anon.jpg"} />
                        {showRating()}
                    </div>
                    <div className="contractor-search-basicinfo">
                        <Card.Title>{props.name}</Card.Title>
                        <div>
                            <div style={{ display: "flex" }}>
                                <Card.Subtitle className="text-muted">
                                    {props.location_string}
                                </Card.Subtitle>
                            </div>
                        </div>
                    </div>
                </div>
                <div style={{ display: "flex", flexDirection: "column" }}>
                    <div style={{ display: "flex", marginBottom: "10px", marginTop: "10px" }}>
                        {showTags()}
                    </div>
                    <Button as={Link} to={fullLink} target="_blank">View Profile</Button>

                </div>
            </Card.Body>
        </Card >
    );
}

export default SearchContractorsItem;