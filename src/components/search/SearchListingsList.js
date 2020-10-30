import React from "react";

import SearchListingsItem from "./SearchListingsItem";

const SearchListingsList = ({ selectedFilters }) => {
    const fakeListingItems = [
        { description: "description 1", image: "image 1", skilltags: "fake skilltags 1", UID: "0EkBnoI7BnbKHO1RYm5J" },
        { description: "description 2", image: "image 2", skilltags: "fake skilltags 2", UID: "3PV173J75WpJdvQEaUVO" },
        { description: "description 3", image: "image 3", skilltags: "fake skilltags 3", UID: "BTEoziy9gwbDoawduYt5" },
        { description: "description 4", image: "image 4", skilltags: "fake skilltags 4", UID: "Dg48GlazHo7rYmyempMW" },
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