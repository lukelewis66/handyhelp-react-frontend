import React from "react";
import { Card } from "react-bootstrap";

const ReviewItem = ({ props }) => {
    return (
        <div>
            <Card className = "reviewCardStyle">
                <Card.Body>
                    <Card.Title>{props.title}</Card.Title>
                    <Card.Subtitle>Rating: {props.rating}</Card.Subtitle>
                    <Card.Text>
                        {props.description}
                    </Card.Text>
                </Card.Body>
            </Card>
        </div>
    );
}

export default ReviewItem;