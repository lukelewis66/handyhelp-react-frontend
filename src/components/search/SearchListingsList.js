import React, { useState, useEffect } from "react";

import SearchListingsItem from "./SearchListingsItem";

const SearchListingsList = ({ selectedFilters }) => {
    const fakeListingItems = [
        { description: "description 1", image: "image 1", skilltags: "fake skilltags 1" },
        { description: "description 2", image: "image 2", skilltags: "fake skilltags 2" },
        { description: "description 3", image: "image 3", skilltags: "fake skilltags 3" },
        { description: "description 4", image: "image 4", skilltags: "fake skilltags 4" },
    ];
    return (
        <div className="component-border">
            <h1>SearchListingsList component</h1>
            <p>Selected Filters: {selectedFilters}</p>
            <div className="flex-list">
                {fakeListingItems.map((item) => (
                    <SearchListingsItem props={item} />
                ))}
            </div>
        </div>
    );
}

export default SearchListingsList;