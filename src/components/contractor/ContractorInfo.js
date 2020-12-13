import React, { useState, useEffect } from "react";
import { SKILLTAG_PILLS } from "../../constants/skilltags";
import { getContractor } from "../../firebase/Contractor";

const ContractorInfo = () => {
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
		getContractor(localStorage.getItem("UID")).then((contractor) => {
			setContractor(contractor);
		})
	}, [])

	function showRating() {
		if (contractor.ratingCount !== 0) {
		  return <span className="rating-display">&#9734;{contractor.rating ? contractor.rating.toFixed(2) : "0"}</span>
		}
		else {
		  return <span className="rating-display">No Ratings</span>
		}
	}

	function showTags() {
		return contractor.skilltags.map(tag => (
			SKILLTAG_PILLS[tag]
		));
	}

	return (
		<div className="infoPanelCon">
			<h1>{contractor.name ? `Welcome back, ${contractor.name}!` : null}</h1>
			<h3>{contractor.location_string ? contractor.location_string : null} </h3>
			<h7>{contractor.rating ? showRating() : ""} {showTags()}</h7>
			<p>{contractor.bio ? contractor.bio : null}</p>
		</div>)
}

export default ContractorInfo
