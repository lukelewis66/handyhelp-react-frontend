import React, { useState, useEffect } from "react";

import SearchContractorsItem from "./SearchContractorsItem";

import { Spinner } from "react-bootstrap";

const SearchContractorsList = ({ contractors }) => {
    return (
        <div className="search-list">
            <div className="flex-list">
                {contractors.length ? null : <Spinner animation="border" />}
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