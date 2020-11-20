import React, { useState, useEffect } from "react";

import SearchContractorsItem from "./SearchContractorsItem";

import { Spinner } from "react-bootstrap";

const SearchContractorsList = ({ contractors, filterMessage }) => {
    return (
        <div className="search-list">
            <div>
                <h3>{filterMessage}</h3>
            </div>
            {contractors.length ? null : <Spinner animation="border" />}
            <div className="flex-list">
                {contractors.map((contractor) => (
                    <SearchContractorsItem key={contractor.id} props={contractor} />
                ))}
                {/* {fakeContractorItems.map((item) => (
                    <SearchContractorsItem key={item.name} props={item} />
                ))} */}
            </div>
        </div>
    );
}

export default SearchContractorsList;