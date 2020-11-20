import React, { useState, useEffect } from "react";

import SearchContractorsList from "../search/SearchContractorsList";
import { getAllContractors } from "../../firebase/Contractor";
import { distance } from "../../gmaps/distance";
import { getCityName } from "../../gmaps/geocode";

import SearchFilter from "../search/SearchFilter";

const SearchContractorsPage = () => {
    const [allContractors, setAllContractors] = useState([]);
    const [filteredContractors, setFilteredContractors] = useState([]);
    const [filterMessage, setFilterMessage] = useState("Showing all contractors");

    useEffect(() => {
        getAllContractors().then((list) => {
            setAllContractors(list);
            setFilteredContractors(list);
        });
    }, []);

    // function filterContractors(filter){
    function handleFilters(filters) {
        console.log("filters: ", filters);
        getCityName(filters.location[0], filters.location[1]).then((city) => {
            setFilterMessage(`Showing relevant contractors within ${filters.distance} miles of ${city}.`);
        });
        allContractors.forEach(contractor => {
            console.log("contractor lat: ", contractor.location[0]);
            console.log("contractor lng: ", contractor.location[1]);
            console.log("filters lat: ", filters.location[0]);
            console.log("filters lng: ", contractor.location[1]);
            contractor["distance"] = distance(filters.location[1], filters.location[0], contractor.location[1], contractor.location[2]);
            console.log("contractor distance: ", contractor["distance"]);
        });

    }

    return (
        <div>
            <div className="search-page" style={{ display: "flex" }}>
                <SearchFilter handleFilters={handleFilters} />
                <SearchContractorsList contractors={filteredContractors} filterMessage={filterMessage} />
            </div>
        </div>
    );
}

export default SearchContractorsPage;