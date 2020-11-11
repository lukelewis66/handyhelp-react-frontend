import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import { getContractorInfo } from "../../firebase/Client";


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
        console.log("individual contracor useEffect");
        console.log("UID: " + UID);
        getContractorInfo(UID)
            .then((data) => {
                setApiCalls(apiCalls + 1);
                setContractor(data);
                console.log(data);
            })
            .catch((err) => { console.log(err) });
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
