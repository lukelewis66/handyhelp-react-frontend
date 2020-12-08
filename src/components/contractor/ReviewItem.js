import React from "react";
import { Card } from "react-bootstrap";

const ReviewItem = ({ props }) => {
    
    return (
        < Card className="reviewCardStyle" variant="outlined" >
            <Card.Body style={{ display: "flex", alignItems: "center" }}>
                <div style={{ display: "flex", flexDirection: "column", height: "120px", width: "80%" }}>
                    <h5 style={{ marginRight: "1rem" }}>{props.title}</h5>
                    <div style={{ display: "flex" }}>
                        <div className="reviewCardInfo" style={{ width: "30%" }}>
                            <div>
                                <p className="mb-2 text-muted">Rating: {props.rating} star(s)</p>
                            </div>
                        </div>
                        <div className="reviewCardInfo" >
                            <div>
                                <Card.Text>
                                    {props.description}
                                </Card.Text>
                            </div>
                        </div>
                    </div>
                </div>
            </Card.Body>
        </Card >
    );
    
        /*
    return (
        <div>
            <Card className = "reviewCardStyle">
                <Card.Body>
                    <Card.Title>{props.title}</Card.Title>
                    <Card.Subtitle>Rating: {props.rating}</Card.Subtitle>
                    <div>
                        <Card.Text >
                            {props.description}
                        </Card.Text>
                    </div>
                </Card.Body>
            </Card>
        </div>
    );
*/
}

export default ReviewItem;