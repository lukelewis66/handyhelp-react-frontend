import React from "react";

import SearchListingsItem from "./SearchListingsItem";

const SearchListingsList = ({ selectedFilters }) => {
    const fakeListingItems = [
        { description: "description 1", image: "image 1", skilltags: "fake skilltags 1", LID: "0EkBnoI7BnbKHO1RYm5J" },
        { description: "description 2", image: "image 2", skilltags: "fake skilltags 2", LID: "0EkBnoI7BnbKHO1RYm5J" },
        { description: "description 3", image: "image 3", skilltags: "fake skilltags 3", LID: "0EkBnoI7BnbKHO1RYm5J" },
        { description: "description 4", image: "image 4", skilltags: "fake skilltags 4", LID: "0EkBnoI7BnbKHO1RYm5J" },
    ];
    return (
        <div className="component-border">
            <h1>SearchListingsList component</h1>
            <p>Selected Filters: {selectedFilters}</p>
            <div className="flex-list">
                {fakeListingItems.map((item) => (
                    <SearchListingsItem key={item.description} props={item} />
                ))}
            </div>
        </div>
    );
}

export default SearchListingsList;