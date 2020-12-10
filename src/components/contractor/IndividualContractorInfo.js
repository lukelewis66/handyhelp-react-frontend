import React, { useState, useEffect } from "react";
import { distance } from "../../gmaps/distance"
import { getContractor } from "../../firebase/Contractor";
import { getCityName } from "../../gmaps/geocode";
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

	return (
		<div className="infoPanelCon">
			<h1>{contractor.name}</h1>
			<h3>{contractor.location_string} {showTags()}</h3>
			<p>{contractor.bio}</p>
		</div>
	);
};
export default IndividualContractorInfo
