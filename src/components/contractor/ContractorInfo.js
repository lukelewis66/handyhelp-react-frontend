import React, { useState, useEffect } from "react";

import { getContractor } from "../../firebase/Contractor";
import { getCityName } from "../../gmaps/geocode";

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

	const [userCity, setUserCity] = useState("");

	useEffect(() => {
		getContractor(localStorage.getItem("UID")).then((contractor) => {
			//getCityName(contractor.location[0], contractor.location[1]).then((city) => setUserCity(city));
			setContractor(contractor);
		})
	}, [])
	return (
		<div className="infoPanel">
			<h2>Name: {contractor.name}</h2>
			<h2>Bio: {contractor.bio}</h2>
			<h3>Email: {contractor.email}</h3>
			<h3>Phone: {contractor.phone}</h3>
			<h3>Location: {contractor.location}</h3>
			<h3>City: {contractor.location_string}</h3>
			<h3>Skills: {contractor.skilltags}</h3>
			<h3>Rating: </h3>
		</div>)
}

export default ContractorInfo
