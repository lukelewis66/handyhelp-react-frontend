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
			if (response.role === 'contractor') {
				setRole('contractor');
			}
		})
	const showDeleteButton = () => {
		if (role === 'contractor') {
			return (
				<div style={{ display: "flex", justifyContent: "flex-end" }}>
					<div>
						<ToastProvider placement='top-center'> <DeleteFeedItemModal {...DeleteFeedItemProps} /> </ToastProvider>
					</div>
				</div>
			);
		}
	}
	return (


		< Card className="listing-card" variant="outlined" >
			<Card.Body style={{ display: "flex", alignItems: "center" }}>
				<div style={{ width: "20%" }}>
					<img className="listing-photo" src={props.images[0] ? props.images[0] : "/hammer-icon.jpg"} alt="ClientListingImage" />
				</div>
				<div style={{ display: "flex", flexDirection: "column", height: "160px", width: "80%" }}>
					<h5 style={{ marginRight: "1rem" }}>{props.title}</h5>
					<div style={{ display: "flex" }}>
						<div className="listing-info" style={{ width: "30%" }}>
							<div>
								<p className="mb-2 text-muted">{props.date_posted.substring(0, props.date_posted.length - 12)}</p>
							</div>
						</div>
						<div className="listing-info" style={{ width: "70%" }}>
							<div>
								<Card.Text>
									{props.description}
								</Card.Text>
							</div>
							{showDeleteButton()}
						</div>
					</div>
				</div>
			</Card.Body>
		</Card >
	)
	// if (role == 'client') {
	// 	return (
	// 		<div>
	// 			<Card className="cardStyle" variant="outlined">
	// 				<Card.Body>
	// 					<Card.Img className="itemPhoto" variant="top" src={props.images[0] ? props.images[0] : "/hammer-icon.jpg"} alt="FeedItemImage" />
	// 					<Card.Title>{props.title}</Card.Title>
	// 					<Card.Text>
	// 						{props.description}
	// 					</Card.Text>
	// 				</Card.Body>
	// 			</Card>
	// 		</div>
	// 	);
	// } else {
	// 	return (
	// 		<div>
	// 			<Card className="cardStyle" variant="outlined">
	// 				<Card.Body>
	// 					<Card.Img className="itemPhoto" variant="top" src={props.images[0] ? props.images[0] : "/hammer-icon.jpg"} alt="FeedItemImage" />
	// 					<Card.Title>{props.title}</Card.Title>
	// 					<Card.Text>
	// 						{props.description}
	// 					</Card.Text>
	// 					<ToastProvider placement='top-center'> <DeleteFeedItemModal {...DeleteFeedItemProps} /> </ToastProvider>
	// 				</Card.Body>
	// 			</Card>
	// 		</div>
	// 	);
	// }
}

export default FeedItem;

