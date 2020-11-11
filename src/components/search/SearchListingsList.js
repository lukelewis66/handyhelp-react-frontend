import React, { useState, useEffect } from "react";

import SearchListingsItem from "./SearchListingsItem";
import { getAllListings } from "../../firebase/Client";

const SearchListingsList = ({ selectedFilters }) => {
    const fakeListingItems = [
        { description: "description 1", image: "image 1", skilltags: "fake skilltags 1", LID: "0EkBnoI7BnbKHO1RYm5J" },
        { description: "description 2", image: "image 2", skilltags: "fake skilltags 2", LID: "0EkBnoI7BnbKHO1RYm5J" },
        { description: "description 3", image: "image 3", skilltags: "fake skilltags 3", LID: "0EkBnoI7BnbKHO1RYm5J" },
        { description: "description 4", image: "image 4", skilltags: "fake skilltags 4", LID: "0EkBnoI7BnbKHO1RYm5J" },
    ];

    const [listings, setListings] = useState([]);

    useEffect(() => {
        const filterUID = false;
        const active = true;
        getAllListings(filterUID, active).then((list) => {
            setListings(list);
        });
    }, []);

    return (
        <div className="component-border">
            <h1>Results</h1>
            <p>Selected Filters: {selectedFilters}</p>
            <div className="flex-list">
                {listings.map((item) => (
                    <SearchListingsItem key={item.id} props={item} />
                ))}
                {/* {fakeListingItems.map((item) => (
                    <SearchListingsItem key={item.description} props={item} />
                ))} */}
            </div>
        </div>
    );
}

export default SearchListingsList;