import React, { useState } from "react";

import GeoSearchBar from "../search/GeoSearchBar";
import {getAllListings, getListing} from "../../Users/Client";
import BucketInit from "../../BucketInit";



const HomePage = () => {
    const [coordinates, setCoordinates] = useState([null, null]);

    function handleCoordinates(lat, lng) {
        setCoordinates([lat, lng]);
    }

    //getAllListings("qaMLKoRMx9O5MBNlyHklbDeY4gf2");
    //getListing("QpFUlk3j2R6vroBztNpN");

    return (
        <div>
            <h1>HomePage component</h1>
            <GeoSearchBar handleCoordinates={handleCoordinates} />
            <div style={{ paddingTop: "10px" }}>
                <p>Latitude: {coordinates[0]}</p>
                <p>Longitude: {coordinates[1]}</p>
            </div>
        </div>
    );
}

export default HomePage;