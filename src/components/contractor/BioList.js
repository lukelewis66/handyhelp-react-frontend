import React, { useState, useEffect } from "react";

import { getContractor } from "../../firebase/Contractor";

const BioList = () => {
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
			//getCityName(contractor.location[0], contractor.location[1]).then((city) => setUserCity(city));
			setContractor(contractor);
		})
	}, [])
    return (
        <div className = "tabStyle" style = {{display: "block"}}>
            <h3>About me</h3>
            <br />
            <p>
                {contractor.bio}
            </p>
        </div>
    )
}

export default BioList