import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import {getContractorInfo} from "../../Users/Client";


const IndividualContractor = () => {

    const [contractor, setContractor] = useState({
        description: "No description",
        email: "No Email",
        image: "",
        skilltags: [],
        name: "Anonymous",
    });
    let { UID } = useParams();
    useEffect(() => {
        console.log("UID: " + UID);
        getContractorInfo(UID)
        .then((data) => {setContractor(data); console.log(data)})
        .catch((err) => {console.log(err)});  
    }, [])

    return (
        <div>
            <h1>Contractor: {contractor.name}</h1>
            <h2>Bio: {contractor.bio}</h2>
            <h2>Last Active: {contractor.last_active}</h2>
            <h3>Location: {contractor.location}</h3>
        </div>
    );
}

export default IndividualContractor;
