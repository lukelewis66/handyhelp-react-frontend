import React, { useState, useEffect } from "react";

import SearchContractorsItem from "./SearchContractorsItem";
import { getAllContractors } from "../../firebase/Contractor";

const SearchContractorsList = () => {
    const fakeContractorItems = [
        { name: "name 1", rating: "rating 1", skilltags: "fake skilltags 1", UID: "WpCIGOyNIdFNbqlRtCKQ" },
        { name: "name 2", rating: "rating 2", skilltags: "fake skilltags 2", UID: "WpCIGOyNIdFNbqlRtCKQ" },
        { name: "name 3", rating: "rating 3", skilltags: "fake skilltags 3", UID: "WpCIGOyNIdFNbqlRtCKQ" },
        { name: "name 4", rating: "rating 4", skilltags: "fake skilltags 4", UID: "WpCIGOyNIdFNbqlRtCKQ" },
    ];
    const [contractors, setContractors] = useState([])

    useEffect(() => {
        getAllContractors().then((list) => {
            setContractors(list);
        })
    }, []);
    return (
        <div className="component-border">
            <h1>SearchContractorsList component</h1>
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