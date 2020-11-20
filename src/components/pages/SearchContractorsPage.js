import React, { useState, useEffect } from "react";

import SearchContractorsList from "../search/SearchContractorsList";
import { getAllContractors } from "../../firebase/Contractor";

import SearchFilter from "../search/SearchFilter";

const SearchContractorsPage = () => {
    const [filteredContractors, setFilteredContractors] = useState([]);

    useEffect(() => {
        getAllContractors().then((list) => {
            setFilteredContractors(list);
        });
    }, []);

    // function filterContractors(filter){


    return (
        <div>
            <div style={{ display: "flex" }}>
                <SearchFilter />
                <SearchContractorsList contractors={filteredContractors} />
            </div>
        </div>
    );
}

export default SearchContractorsPage;