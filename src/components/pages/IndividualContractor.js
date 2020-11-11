import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import { getContractor } from "../../firebase/Contractor";


const IndividualContractor = () => {
    const [apiCalls, setApiCalls] = useState(0);
    const [contractor, setContractor] = useState({
        description: "No description",
        email: "No Email",
        image: "",
        skilltags: [],
        name: "Anonymous",
    });
    let { UID } = useParams();
    useEffect(() => {
        console.log("individual contractor useeffect");
        console.log("UID: ", UID);
        getContractor(UID).then((contractor) => {
            setApiCalls(apiCalls + 1);
            setContractor(contractor);
        })
    }, [])

    return (
        <div>
            <h1>Contractor: {contractor.name}</h1>
            <h2>Bio: {contractor.bio}</h2>
            <h2>Last Active: {contractor.last_active}</h2>
            <h3>Location: {contractor.location}</h3>
            <h2>Api Calls: {apiCalls}</h2>
        </div>
    );
}

export default IndividualContractor;
