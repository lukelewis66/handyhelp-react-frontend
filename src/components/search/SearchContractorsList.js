import React, { useState, useEffect } from "react";

import SearchContractorsItem from "./SearchContractorsItem";

import { Spinner } from "react-bootstrap";

const SearchContractorsList = ({ contractors, filterMessage, skillTagFilters }) => {
    const showContractors = () => {
        if (contractors === null) {
            return <Spinner animation="border" />;
        }
        else if (contractors.length === 0) {
            return <h2>Sorry, no contractors found.</h2>
        }
        else {
            var list = contractors.map((contractor) => (
                <SearchContractorsItem key={contractor.id} props={contractor} />
            ))
            return list;
        }
    }
    return (
        <div className="search-list">
            <div>
                <h3 style={{ textAlign: "center" }}>{filterMessage}</h3>
                {skillTagFilters ? <h3>{skillTagFilters}</h3> : null}
            </div>
            <div className="flex-list">
                {showContractors()}
            </div>
        </div>
    );
}

export default SearchContractorsList;