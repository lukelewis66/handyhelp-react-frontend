import React, { useState, useEffect,useRef, useParams } from "react";
import { getContractor } from "../../firebase/Contractor";
import { Image } from "react-bootstrap"; 

const IndividualContractorPhoto = ({photoURL}) => {
	
	
	console.log(photoURL);

    return(
	<div className = "profilePhoto" >
		<Image fluid src={photoURL ? photoURL : "/contractor-anon.jpg"} />
	</div>);
	
}

export default IndividualContractorPhoto