import React, { useEffect, useState } from "react";
import { useParams } from "react-router";


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
        var url;
        const server = process.env.REACT_APP_SERVER_URL;
        url = new URL(`${server}/getcontractor`);
        const params = new URLSearchParams();
        params.append("UID", UID);
        url.search = params.toString();
        console.log(url.toString());
        fetch(url)
            .then(response => response.json())
            .then(data => {
                console.log(data);
                setContractor(data);
            }
            )
            .catch((err) => console.log("rejected in IndividContractor"));
    }, [])

    return (
        <div>
            <h1>Contractor: {contractor.name}</h1>
            <h2>Description: {contractor.description}</h2>
        </div>
    );
}

export default IndividualContractor;
