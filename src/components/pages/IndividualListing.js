import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import { initMap } from "../../gmaps/initMap.js"
import {getClientInfo} from "../../Users/Client";


const IndividualListing = () => {

    const [listing, setListing] = useState({
        description: "Default",
        image: "",
        skilltags: [],
        title: "Name",
    });
    const [userInfo, setUserinfo] = useState({});
    let { LID } = useParams();
    useEffect(() => {
        var url;
        const server = process.env.REACT_APP_SERVER_URL;
        url = new URL(`${server}/getlisting`);
        var params = new URLSearchParams();
        params.append("LID", LID);
        url.search = params.toString();
        console.log(url.toString());
        fetch(url)
            .then(response => response.json())
            .then(data => {
                console.log("individual listing data: " + data + " | data[client]: " + data["client"]);
                setListing(data);
                getClientInfo(data['client'])
                .then((data) => {setUserinfo(data); console.log("setting user info")})
                .catch((err) => {console.log(err)});
            }
            )
            .catch((err) => console.log("rejected in IndividLisiting" + err));
    }, [])

    return (
        
        <div>
            <h1>Project: {listing.title}</h1>
            <h2>Description: {listing.description}</h2>
            <h2>client UID: {listing.client}</h2>
            <h2>data: {userInfo.location}</h2>
        </div>
    );
}

export default IndividualListing;