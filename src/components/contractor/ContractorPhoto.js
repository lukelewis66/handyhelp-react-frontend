import React, { useState, useEffect } from "react";
import { getContractor } from "../../firebase/Contractor";
import { Image } from "react-bootstrap"; 

const ContractorPhoto = () => {
	const [profilepicture, setProfilePicture] = useState("");

	const [userCity, setUserCity] = useState("");

	const [apiCalls, setApiCalls] = useState(0);

	useEffect(() => {
		getContractor(localStorage.getItem("UID")).then((contractor) => {
			console.log(contractor);
			setApiCalls(apiCalls + 1);
			setProfilePicture(contractor.profilepic);
		})
	}, [])
	

    return(
	<div className = "profilePhoto" >
		<Image fluid src={profilepicture} />
	</div>);
	
}

export default ContractorPhoto
