import React from "react";
import { Link } from 'react-router-dom';
import { Card, Button } from "react-bootstrap";

const SearchContractorsItem = ({ props }) => {

    var fullLink = "contractors/UID=";
    fullLink += props.id;

    return (
        < Card className="contractor-card" variant="outlined" >
            <Card.Body>
                <div style={{ display: "flex", marginBottom: "1rem" }}>
                    <img className="contractor-search-image" src="/contractor-anon.jpg" />
                    <div className="contractor-search-basicinfo">
                        <Card.Title>{props.name}</Card.Title>
                        <Card.Subtitle className="mb-2 text-muted">{props.location_string}</Card.Subtitle>
                    </div>
                </div>
                <Card.Text>
                    Email: {props.email}<br />
                    Phone: {props.phone}<br />
                </Card.Text>
                <Button as={Link} to={fullLink}>Learn More</Button>
            </Card.Body>
        </Card >
        // <div className="component-border">
        //     <h3>SearchContractorsItem component</h3>
        //     <ul>
        //         <li>{props.name}</li>
        //         <li>{props.rating}</li>
        //         <li>{props.skilltags}</li>
        //     </ul>
        //     <Link to={fullLink}>
        //         <button type="button" class="btn btn-primary">Learn More</button>
        //     </Link>
        // </div>
    );
}

export default SearchContractorsItem;