import React, { useState, useEffect } from "react";

import SearchListingsList from "../search/SearchListingsList";
import SearchFilter from "../search/SearchFilter";
import { getAllListings } from "../../firebase/Client";
import { getCityName } from "../../gmaps/geocode";
import { filterByDistance, filterByTags } from "../search/filterFunctions";
import { SKILLTAG_PILLS } from "../../constants/skilltags";

const SearchListingsPage = () => {
    const [allListings, setAllListings] = useState([]);
    const [filteredListings, setFilteredListings] = useState(null);
    const [filterMessage, setFilterMessage] = useState(<span className="filter-message">Showing all relevant listings</span>);
    const [skillFilterMessage, setSkillFilterMessage] = useState("");

    useEffect(() => {
        const filterUID = false;
        const active = true;
        getAllListings(filterUID, active).then((list) => {
            setAllListings(list);
            setFilteredListings(list);
        });
    }, []);

    const handleFilters = (filters) => {
        var filtered = allListings;
        console.log("alllistings: ", allListings);
        if (filters.location.length > 0) {
            getCityName(filters.location[0], filters.location[1]).then((city) => {
                setFilterMessage(<span className="filter-message">Showing relevant listings within {filters.distance} miles of {city}</span>);
            });
            filtered = filterByDistance(allListings, filters.distance, filters.location);
        }
        if (filters.skilltags.length > 0) {
            if (filters.location.length > 0) {
                filtered = filterByTags(filtered, filters.skilltags);
            } else {
                filtered = filterByTags(allListings, filters.skilltags);
            }
            var filterComponents = filters.skilltags.map(tag => {
                return SKILLTAG_PILLS[tag];
            })
            setSkillFilterMessage(filterComponents);
        } else {
            setSkillFilterMessage("");
        }
        setFilteredListings(filtered);
    }

    const handleClearFilters = () => {
        setFilteredListings(allListings);
        setFilterMessage(<span className="filter-message">Showing all relevant listings</span>)
        setSkillFilterMessage("");
    }

    return (
        <div className="search-page">
            <SearchFilter handleFilters={handleFilters} handleClearFilters={handleClearFilters} />
            <SearchListingsList listings={filteredListings} filterMessage={filterMessage} skillFilterMessage={skillFilterMessage} />
        </div>
    );
}

export default SearchListingsPage;