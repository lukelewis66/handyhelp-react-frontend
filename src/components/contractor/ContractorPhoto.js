import React, { useState, useEffect } from "react";
import { getContractor } from "../../firebase/Contractor";
import { Image } from "react-bootstrap"; 

const ContractorPhoto = () => {
	const [profilepicture, setProfilePicture] = useState("");

	
	useEffect(() => {
		getContractor(localStorage.getItem("UID")).then((contractor) => {
			setProfilePicture(contractor.profilepic);
		})
	}, [])
	

    return(
	<div className = "profilePhoto" >
		<Image fluid src={profilepicture } />
	</div>);
	
}

export default ContractorPhoto
