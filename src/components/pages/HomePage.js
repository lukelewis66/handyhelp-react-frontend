import React, { useState } from "react";

import GeoSearchBar from "../search/GeoSearchBar";
import { getAllListings, getListing } from "../../firebase/Client";
import BucketInit from "../../BucketInit";



const HomePage = () => {
    const [coordinates, setCoordinates] = useState([null, null]);

    //getAllListings("qaMLKoRMx9O5MBNlyHklbDeY4gf2");
    //getListing("QpFUlk3j2R6vroBztNpN");

    return (
        <div>
            <h1>Welcome To HandyHelp!</h1>
        </div>
    );
}

export default HomePage;