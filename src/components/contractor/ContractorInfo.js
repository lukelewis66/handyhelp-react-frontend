import React, { useState, useEffect } from "react";

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
	console.log("testing");
	return (
		<div className="infoPanelCon">
			<h1>{contractor.name ? `Welcome back, ${contractor.name}!` : null}</h1>
			<h3>{contractor.location_string ? contractor.location_string : null}</h3>
			<p>{contractor.bio ? contractor.bio : null}</p>
		</div>)
}

export default ContractorInfo
