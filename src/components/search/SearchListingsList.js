import React, { useState, useEffect } from "react";

import SearchListingsItem from "./SearchListingsItem";
import { getAllListings } from "../../firebase/Client";

const SearchListingsList = ({ selectedFilters }) => {

    const [listings, setListings] = useState([]);

    useEffect(() => {
        const filterUID = false;
        const active = true;
        getAllListings(filterUID, active).then((list) => {
            setListings(list);
        });
    }, []);

    return (
        <div className="search-list">
            <h1>Results</h1>
            <p>Selected Filters: {selectedFilters}</p>
            <div className="flex-list">
                {listings.map((item) => (
                    <SearchListingsItem key={item.id} props={item} />
                ))}
                {/* {fakeListingItems.map((item) => (
                    <SearchListingsItem key={item.description} props={item} />
                ))} */}
            </div>
        </div>
    );
}

export default SearchListingsList;