import React, { useState, useEffect } from "react";

import SearchContractorsList from "../search/SearchContractorsList";
import { getCityName } from "../../gmaps/geocode";
import { filterByDistance, filterByTags } from "../search/filterFunctions";
import { SKILLTAG_PILLS } from "../../constants/skilltags";

import SearchFilter from "../search/SearchFilter";

const SearchContractorsPage = ({ contractors }) => {
    const [allContractors, setAllContractors] = useState(null);
    const [filteredContractors, setFilteredContractors] = useState(null);
    const [filterMessage, setFilterMessage] = useState(<span className="filter-message">Showing all relevant contractors</span>);
    const [skillFilterMessage, setSkillFilterMessage] = useState("");

    useEffect(() => {
        console.log("contractors: ", contractors);
        setAllContractors(contractors);
        setFilteredContractors(contractors);
    }, [contractors]);

    function handleFilters(filters) {
        var filtered = allContractors;
        if (filters.location.length > 0) {
            getCityName(filters.location[0], filters.location[1]).then((city) => {
                setFilterMessage(<span className="filter-message">Showing relevant contractors within {filters.distance} miles of {city}</span>);
            });
            filtered = filterByDistance(allContractors, filters.distance, filters.location);
        }
        if (filters.skilltags.length > 0) {
            if (filters.location.length > 0) {
                filtered = filterByTags(filtered, filters.skilltags);
            } else {
                filtered = filterByTags(allContractors, filters.skilltags);
            }
            var filterComponents = filters.skilltags.map(tag => {
                return SKILLTAG_PILLS[tag];
            })
            setSkillFilterMessage(filterComponents);
            // setSkillFilterMessage(`Skill Tag Filters: ${filters.skilltags.join(", ")}`);
        } else {
            setSkillFilterMessage("");
        }
        setFilteredContractors(filtered);
    }

    const handleClearFilters = () => {
        setFilteredContractors(allContractors);
        // setFilterMessage("Showing all contractors");
        setFilterMessage(<span className="filter-message">Showing all relevant contractors</span>);
        setSkillFilterMessage("");
    }

    return (
        <div className="search-page">
            <SearchFilter handleFilters={handleFilters} handleClearFilters={handleClearFilters} />
            <SearchContractorsList contractors={filteredContractors} filterMessage={filterMessage} skillTagFilters={skillFilterMessage} />
        </div>
    );
}

export default SearchContractorsPage;