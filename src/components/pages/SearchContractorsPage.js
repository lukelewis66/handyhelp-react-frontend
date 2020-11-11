import React from "react";

import SearchContractorsList from "../search/SearchContractorsList";
import SearchFilter from "../search/SearchFilter";

const SearchContractorsPage = () => {

    return (
        <div>
            <h1>SearchContractorsPage component</h1>
            <div style={{ display: "flex" }}>
                <SearchFilter />
                <SearchContractorsList />
            </div>
        </div>
    );
}

export default SearchContractorsPage;