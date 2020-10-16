import React from "react";

import SearchContractorsItem from "./SearchContractorsItem";

const SearchContractorsList = () => {
    const fakeContractorItems = [
        { name: "name 1", rating: "rating 1", skilltags: "fake skilltags 1" },
        { name: "name 2", rating: "rating 2", skilltags: "fake skilltags 2" },
        { name: "name 3", rating: "rating 3", skilltags: "fake skilltags 3" },
        { name: "name 4", rating: "rating 4", skilltags: "fake skilltags 4" },
    ];
    return (
        <div className="component-border">
            <h1>SearchContractorsList component</h1>
            <div className="flex-list">
                {fakeContractorItems.map((item) => (
                    <SearchContractorsItem props={item} />
                ))}
            </div>
        </div>
    );
}

export default SearchContractorsList;