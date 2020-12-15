import React, { useState, useEffect } from "react";
import { getContractor } from "../../firebase/Contractor";
import { SKILLTAG_PILLS } from "../../constants/skilltags";


const IndividualContractorInfo = (c_UID) => {
	const [contractor, setContractor] = useState({
		name: "",
		location: "",
		location_string: "",
		bio: "",
		skilltags: [],
		email: "",
		phone: "",
	});

	useEffect(() => {
		getContractor(c_UID.c_UID).then((contractor) => {
			//getCityName(contractor.location[0], contractor.location[1]).then((city) => setUserCity(city));
			setContractor(contractor);
		})
	}, []);

	function showTags() {
		return contractor.skilltags.map(tag => (
			SKILLTAG_PILLS[tag]
		));
	}

	function showRating() {
		if (contractor.ratingCount !== 0) {
		  return <span className="rating-display">&#9734;{contractor.rating ? contractor.rating.toFixed(2) : "0"}</span>
		}
		else {
		  return <span className="rating-display">No Ratings</span>
		}
	
	}

	return (
		<div className="infoPanelIndCon">
			<h1>{contractor.name}</h1>
			<h3>{contractor.location_string?"Based in ":""}{contractor.location_string}</h3>
			<h7>{contractor.rating ? showRating() : ""} {showTags()}</h7>
			<p>{contractor.bio}</p>
		</div>
	);
};
export default IndividualContractorInfo
