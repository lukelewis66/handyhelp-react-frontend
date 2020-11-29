import React, { useState, useEffect } from "react";
import {distance} from "../../gmaps/distance"
import { getContractor } from "../../firebase/Contractor";
import { getCityName } from "../../gmaps/geocode";

const IndividualContractorInfo = (props) => {
	const [contractor, setContractor] = useState({
		name: "",
		location: "",
		location_string: "",
		bio: "",
		skilltags: [],
		email: "",
		phone: "",
	});


	const [userCity, setUserCity] = useState("");

	useEffect(() => {
		setContractor(props);
	}, [])
	return (
		<div className="infoPanelCon">
			<h1>Contractor: {contractor.name}!</h1>
			<h3>Based in {contractor.location_string}</h3>
			<h3>Distance to Contractor: {distance(contractor.location)}</h3>
			<p>{contractor.bio}</p>
		</div>)
}

export default IndividualContractorInfo
