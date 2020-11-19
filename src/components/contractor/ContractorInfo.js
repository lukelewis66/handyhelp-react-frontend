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
			<h1>Welcome back, {contractor.name}!</h1>
		</div>)
}

export default ContractorInfo
