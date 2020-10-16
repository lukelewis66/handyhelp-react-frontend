import React, { useState } from "react";

import SearchListingsList from "../search/SearchListingsList";
import SearchFilter from "../search/SearchFilter";

const SearchListingsPage = () => {
    const [selectedFilters, setSelectedFilters] = useState("");

    const handleFilter = (filters) => {
        setSelectedFilters(filters);
    }

    return (
        <div>
            <h1>SearchListingsPage component</h1>
            <div style={{ display: "flex" }}>
                <SearchFilter handleFilter={handleFilter} />
                <SearchListingsList selectedFilters={selectedFilters} />
            </div>
        </div>
    );
}

export default SearchListingsPage;