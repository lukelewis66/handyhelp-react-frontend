import React, { useState } from "react";
import { Card } from "react-bootstrap";
import DeleteFeedItemModal from "./DeleteFeedItemModal";
import { ToastProvider } from "react-toast-notifications";
import { getUserRole } from "../../firebase/accountFunctions";

const FeedItem = ({ props }) => {
	const [role, setRole] = useState('client');

	let DeleteFeedItemProps = {
		UID: localStorage.getItem("UID"),
		FID: props.id
	}

	getUserRole(localStorage.getItem("UID"))
		.then((response) => {
			if(response.role == 'contractor') {
				setRole('contractor');
			}
		})

	if(role == 'client') {
		return (
			<div>
				<Card className="cardStyle" variant="outlined">
					<Card.Body>
						<Card.Img className="itemPhoto" variant="top" src={props.images[0] ? props.images[0] : "/hammer-icon.jpg"} alt="FeedItemImage" />
						<Card.Title>{props.title}</Card.Title>
						<Card.Text>
							{props.description}
						</Card.Text>
					</Card.Body>
				</Card>
			</div>
		);
	} else {
		return (
			<div>
				<Card className="cardStyle" variant="outlined">
					<Card.Body>
						<Card.Img className="itemPhoto" variant="top" src={props.images[0] ? props.images[0] : "/hammer-icon.jpg"} alt="FeedItemImage" />
						<Card.Title>{props.title}</Card.Title>
						<Card.Text>
							{props.description}
						</Card.Text>
						<ToastProvider placement='top-center'> <DeleteFeedItemModal {...DeleteFeedItemProps}/> </ToastProvider>
					</Card.Body>
				</Card>
			</div>
		);
	}
}

export default FeedItem;

