import React, { useState, useEffect } from "react";

import SearchListingsItem from "./SearchListingsItem";

import { Spinner } from "react-bootstrap";


const SearchListingsList = ({ listings, filterMessage, skillFilterMessage }) => {
    const showListings = () => {
        if (listings === null) {
            return <Spinner animation="border" />;
        }
        else if (listings.length === 0) {
            return <h2>Sorry, no listings found.</h2>
        }
        else {
            var list = listings.map((listing) => (
                <SearchListingsItem key={listing.id} props={listing} />
            ))
            return list;
        }
    }

    return (
        <div className="search-list">
            <div>
                <h3>{filterMessage}</h3>
                {skillFilterMessage ? <h3>{skillFilterMessage}</h3> : null}
            </div>
            <div className="flex-list">
                {showListings()}
            </div>
        </div>
    );
}

export default SearchListingsList;