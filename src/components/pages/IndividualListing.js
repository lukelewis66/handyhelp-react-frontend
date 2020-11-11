import React, { useEffect, useState } from "react";
import { useParams } from "react-router";


const IndividualListing = () => {

    const [listing, setListing] = useState({
        description: "Default",
        image: "",
        skilltags: [],
        title: "Name",
    });
    let { LID } = useParams();
    useEffect(() => {
        var url;
        const server = process.env.REACT_APP_SERVER_URL;
        url = new URL(`${server}/getlisting`);
        const params = new URLSearchParams();
        params.append("LID", LID);
        url.search = params.toString();
        console.log(url.toString());
        fetch(url)
            .then(response => response.json())
            .then(data => {
                console.log(data);
                setListing(data);
            }
            )
            .catch((err) => console.log("rejected in IndividLisiting"));
    }, [])

    return (
        <div>
            <h1>Project: {listing.title}</h1>
            <h2>Description: {listing.description}</h2>
        </div>
    );
}

export default IndividualListing;
