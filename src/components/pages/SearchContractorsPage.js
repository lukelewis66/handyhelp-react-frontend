import React, { useState, useEffect } from "react";

import SearchContractorsList from "../search/SearchContractorsList";
import { getAllContractors } from "../../firebase/Contractor";
import { getCityName } from "../../gmaps/geocode";
import { filterByDistance, filterByTags } from "../search/filterFunctions";

import SearchFilter from "../search/SearchFilter";

const SearchContractorsPage = () => {
    const [allContractors, setAllContractors] = useState([]);
    const [filteredContractors, setFilteredContractors] = useState(null);
    const [filterMessage, setFilterMessage] = useState("Showing all contractors");
    const [skillFilterMessage, setSkillFilterMessage] = useState("");

    useEffect(() => {
        getAllContractors().then((list) => {
            setAllContractors(list);
            setFilteredContractors(list);
        });
    }, []);

    function handleFilters(filters) {
        var filtered = allContractors;
        if (filters.location.length > 0) {
            getCityName(filters.location[0], filters.location[1]).then((city) => {
                setFilterMessage(`Showing relevant contractors within ${filters.distance} miles of ${city}.`);
            });
            filtered = filterByDistance(allContractors, filters.distance, filters.location);
        }
        if (filters.skilltags.length > 0) {
            if (filters.location.length > 0) {
                filtered = filterByTags(filtered, filters.skilltags);
            } else {
                filtered = filterByTags(allContractors, filters.skilltags);
            }
            setSkillFilterMessage(`Skill Tag Filters: ${filters.skilltags.join(", ")}`);
        } else {
            setSkillFilterMessage("");
        }
        setFilteredContractors(filtered);
    }

    const handleClearFilters = () => {
        setFilteredContractors(allContractors);
        setFilterMessage("Showing all contractors")
        setSkillFilterMessage("");
    }

    return (
        <div>
            <div className="search-page" style={{ display: "flex" }}>
                <SearchFilter handleFilters={handleFilters} handleClearFilters={handleClearFilters} />
                <SearchContractorsList contractors={filteredContractors} filterMessage={filterMessage} skillTagFilters={skillFilterMessage} />
            </div>
        </div>
    );
}

export default SearchContractorsPage;