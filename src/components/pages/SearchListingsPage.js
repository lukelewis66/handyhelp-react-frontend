import React from "react";

import SearchListingsList from "../search/SearchListingsList";
import SearchFilter from "../search/SearchFilter";

const SearchListingsPage = () => {
    return (
        <div>
            <h1>SearchListingsPage component</h1>
            <div style={{ display: "flex" }}>
                <SearchFilter />
                <SearchListingsList />
            </div>
        </div>
    );
}

export default SearchListingsPage;