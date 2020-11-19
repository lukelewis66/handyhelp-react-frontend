import React, { useEffect, useState } from "react";
import { getUserInfo } from "../../firebase/Client";
import { getCityName } from "../../gmaps/geocode";

const ClientInfo = () => {
	const [userInfo, setUserinfo] = useState([]);
	const [userCity, setUserCity] = useState("");
	useEffect(() => {
		getUserInfo(localStorage.getItem("UID")).then((data) => {
			//console.log(data.location);
			//getCityName(data.location[0], data.location[1]).then((city) => setUserCity(city));
			setUserinfo(data);
		})
	}, []);

	return (
		<div className="infoPanel">
			<h1> Welcome back, {userInfo.name}!</h1>
			<h3>{userInfo.location_string}</h3>
		</div>
		)
}

export default ClientInfo

