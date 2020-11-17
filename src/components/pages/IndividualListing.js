import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import { initMap } from "../../gmaps/initMap.js"
import { getUserInfo, getListing } from "../../firebase/Client";
import { getUserLocation } from "../../firebase/accountFunctions.js";
import { distance } from "../../gmaps/distance.js";


const IndividualListing = () => {
    const [apiCalls, setApiCalls] = useState(0);
    const [listing, setListing] = useState({
        description: "Default",
        image: "",
        skilltags: [],
        title: "Name",
    });
    const [thisUser, setThisUser] = useState({
        location: [0,0]
    });
    const [userInfo, setUserinfo] = useState({
        location: [0,0]
    });
    let { LID } = useParams();
    LID = LID.substring(4, LID.length);
    useEffect(() => {
        console.log("individual listing useEffect");
        if (apiCalls >= 5) {
            console.log("api call limit (5) reached!");
        }
        else {
            getListing(LID)
                .then(data => {
                    console.log("individual listing data: " + data + " | data[client]: " + data["client"]);
                    setListing(data);
                    setApiCalls(apiCalls + 1);
                    getUserInfo(data['client'])
                        .then((data) => {
                            setApiCalls(apiCalls + 1);
                            setUserinfo(data);
                            console.log("setting user info");
                        })
                        .catch((err) => { console.log(err) });
                }
                )
                .catch((err) => console.log("rejected in IndividLisiting" + err));
                var UID = localStorage.getItem("UID");
                getUserLocation(UID).then((user) => {
                    setApiCalls(apiCalls + 1);
                    setThisUser(user);
                })
        }
    }, [])

    return (

        <div>
            <h1>Project: {listing.title}</h1>
            <h2>Description: {listing.description}</h2>
            <h2>client UID: {listing.client}</h2>
            <h2>location: {userInfo.location}</h2>
            <h2>thisUser location: {thisUser.location}</h2>
            <h2>Distance: {distance(thisUser.location[0],thisUser.location[1],userInfo.location[0],userInfo.location[1]).toFixed(1)} miles</h2>
            <h2>Api calls: {apiCalls}</h2>
        </div>
    );
}

export default IndividualListing;