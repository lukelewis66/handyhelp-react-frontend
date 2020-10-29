import React from "react";
import {Card} from "react-bootstrap";

const ClientListingItem = ({ props }) => {

    return (
        <div>
	    {/*
            <ul>
                <li>{props.description}</li>
                <img alt="ClientListingItem image" className="itemPhoto" src={props.image}/>
                <li>{props.skilltags}</li>
            </ul>
	    */}
	    <Card className = "cardStyle" variant = "outlined">
	      <Card.Body>
	    	<Card.Img variant = "top" src = {props.image} alt = "ClientListingImage" />
	        <Card.Title>Card Title</Card.Title>
	        <Card.Text>
	    		{props.description}
	        </Card.Text>
	        <Card.Link href="#">Card Link</Card.Link>
	        <Card.Link href="#">Another Link</Card.Link>
	      </Card.Body>
	    </Card>
        </div>
    );
}

export default ClientListingItem;
