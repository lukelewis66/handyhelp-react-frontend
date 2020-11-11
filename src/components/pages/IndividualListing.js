import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import { initMap } from "../../gmaps/initMap.js"
import { getClientInfo } from "../../firebase/Client";


const IndividualListing = () => {
    const [apiCalls, setApiCalls] = useState(0);
    const [listing, setListing] = useState({
        description: "Default",
        image: "",
        skilltags: [],
        title: "Name",
    });
    const [userInfo, setUserinfo] = useState({});
    let { LID } = useParams();
    useEffect(() => {
        console.log("individual listing useEffect");
        if (apiCalls >= 5) {
            console.log("api call limit (5) reached!");
        }
        else {
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
                    setApiCalls(apiCalls + 1);
                    getClientInfo(data['client'])
                        .then((data) => {
                            setApiCalls(apiCalls + 1);
                            setUserinfo(data);
                            console.log("setting user info");
                        })
                        .catch((err) => { console.log(err) });
                }
                )
                .catch((err) => console.log("rejected in IndividLisiting" + err));
        }
    }, [])

    return (

        <div>
            <h1>Project: {listing.title}</h1>
            <h2>Description: {listing.description}</h2>
            <h2>client UID: {listing.client}</h2>
            <h2>data: {userInfo.location}</h2>
            <h2>Api calls: {apiCalls}</h2>
        </div>
    );
}

export default IndividualListing;