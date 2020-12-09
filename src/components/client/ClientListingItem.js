import React from "react";
import { Card } from "react-bootstrap";
import { SKILLTAG_PILLS } from "../../constants/skilltags";


const ClientListingItem = ({ props }) => {

	const showTags = () => {
		return props.skilltags.map(tag => (
			SKILLTAG_PILLS[tag]
		));
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
								<p className="mb-2 text-muted">{props.location_string}</p>
								<p className="mb-2 text-muted">{props.date_posted.substring(0, props.date_posted.length - 12)}</p>
								{showTags()}
							</div>
						</div>
						<div className="listing-info" style={{ width: "70%" }}>
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
	)
}

export default ClientListingItem;
