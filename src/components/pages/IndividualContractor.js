import userEvent from "@testing-library/user-event";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import { getContractor } from "../../firebase/Contractor";
import { getUserLocation } from "../../firebase/accountFunctions.js";
import { distance } from "../../gmaps/distance";


const IndividualContractor = () => {
    const [apiCalls, setApiCalls] = useState(0);
    const [contractor, setContractor] = useState({
        description: "No description",
        email: "No Email",
        image: "",
        skilltags: [],
        name: "Anonymous",
        location: [0,0]
    });
    const [user, setUser] = useState({
            location: [0,0]
    })
    let { UID } = useParams();
    UID = UID.substring(4, UID.length);
    useEffect(() => {
        console.log("individual contractor useeffect");
        console.log("UID: ", UID);
        getContractor(UID).then((contractor) => {
            setApiCalls(apiCalls + 1);
            setContractor(contractor);
        })
        
    
        UID = localStorage.getItem("UID");
        getUserLocation(UID).then((user) => {
            //if(user.role)
            setApiCalls(apiCalls + 1);
            setUser(user);
        })
    }, [])

    return (
        <div>
            <h1>Contractor: {contractor.name}</h1>
            <h2>Bio: {contractor.bio}</h2>
            <h2>Last Active: {contractor.last_active}</h2>
            <h3>Location: {contractor.location}</h3>
            <h2>Distance: {distance(user.location[0],user.location[1], contractor.location[0],contractor.location[1]).toFixed(1)} miles</h2>
            <h2>Api Calls: {apiCalls}</h2>
        </div>
    );
}

export default IndividualContractor;
