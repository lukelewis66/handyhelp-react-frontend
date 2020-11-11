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
        getContractorInfo(UID.substring(4))
        .then((data) => {setContractor(data); console.log(data)})
        .catch((err) => {console.log(err)});  
    }, [])

    return (
        <div>
            <h1>Contractor: {contractor.name}</h1>
            <h2>Description: {contractor.description}</h2>
    <h2>Location: {contractor.location}</h2>
        </div>
    );
}

export default IndividualContractor;
