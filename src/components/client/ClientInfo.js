import React, { useEffect, useState } from "react";
import {getUserInfo} from "../../Users/Client";

const ClientInfo = () => {
	const [userInfo, setUserinfo] = useState([]);
    useEffect(() => {
        getUserInfo(localStorage.getItem("UID")).then((data) => {
            setUserinfo(data);
            
        })
	},[]);
	
	return (
		<div className = "infoPanel">
			<h2>Name: {userInfo.name}</h2>
			<h3>Location: {userInfo.location}</h3>
		</div>)
}

export default ClientInfo

