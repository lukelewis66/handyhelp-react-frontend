import React from "react";
import { Card } from "react-bootstrap";
import DeleteFeedItemModal from "./DeleteFeedItemModal";

const FeedItem = ({ props }) => {
	let DeleteFeedItemProps = {
		UID: localStorage.getItem("UID"),
		FID: props.id
	}
	if(props.images[0]) {
		return (
			<div>
				<Card className="cardStyle" variant="outlined">
					<Card.Body>
						<Card.Img className="itemPhoto" variant="top" src={props.images[0]} alt="FeedItemImage" />
						<Card.Title>{props.title}</Card.Title>
						<Card.Text>
							{props.description}
						</Card.Text>
						<Card.Link href="#">Card Link</Card.Link>
						<Card.Link href="#">Another Link</Card.Link>
						<DeleteFeedItemModal {...DeleteFeedItemProps} />
					</Card.Body>
				</Card>
			</div>
		);
	}
	else {
		return (
			<div>
				<Card className="cardStyle" variant="outlined">
					<Card.Body>
						<Card.Title>{props.title}</Card.Title>
						<Card.Text>
							{props.description}
						</Card.Text>
						<Card.Link href="#">Card Link</Card.Link>
						<Card.Link href="#">Another Link</Card.Link>
						<DeleteFeedItemModal {...DeleteFeedItemProps} />
					</Card.Body>
				</Card>
			</div>
		);

	}
}

export default FeedItem;

