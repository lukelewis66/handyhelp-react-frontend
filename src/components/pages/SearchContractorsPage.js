import React, { useState, useEffect } from "react";

import SearchContractorsList from "../search/SearchContractorsList";
import { getAllContractors } from "../../firebase/Contractor";
import { distance } from "../../gmaps/distance";
import { getCityName } from "../../gmaps/geocode";

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

    // function filterContractors(filter){
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

    function filterByDistance(currentList, filterDistance, filterLocation) {
        let filteredDistance = [];
        currentList.forEach(contractor => {
            contractor["distance"] = distance(filterLocation[1], filterLocation[0], contractor.location[1], contractor.location[0]);
            if (contractor["distance"] <= filterDistance) {
                filteredDistance.push(contractor);
            }
        });
        return filteredDistance;
    }

    function filterByTags(currentList, tags) {
        let filteredTags = [];
        currentList.forEach(contractor => {
            let i = 0;
            while (i < contractor.skilltags.length) {
                //current contractors skill tag is in the filter
                if (tags.some((tag) => tag === contractor.skilltags[i])) {
                    filteredTags.push(contractor);
                    break;
                }
                i++;
            }
        });
        return filteredTags;
    }

    return (
        <div>
            <div className="search-page" style={{ display: "flex" }}>
                <SearchFilter handleFilters={handleFilters} />
                <SearchContractorsList contractors={filteredContractors} filterMessage={filterMessage} skillTagFilters={skillFilterMessage} />
            </div>
        </div>
    );
}

export default SearchContractorsPage;