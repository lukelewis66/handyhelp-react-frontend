import React from "react";
import { Link } from 'react-router-dom';
import { Card, Button } from "react-bootstrap";

const SearchContractorsItem = ({ props }) => {

    var fullLink = "contractors/UID=";
    fullLink += props.id;

    return (
        < Card className="cardStyle" variant="outlined" >
            <Card.Body>
                <Card.Title>{props.name}</Card.Title>
                <Card.Text>
                    Email: {props.email}
                    Phone: {props.phone}
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