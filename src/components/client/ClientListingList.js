import React from "react";

import ClientListingItem from "./ClientListingItem";
import MakeListingModal from "./MakeListingModal";

const ClientListingList = () => {
    const fakeClientListingItems = [
        { description: "description 1", image: "image 1", skilltags: "fake skilltags 1" },
        { description: "description 2", image: "image 2", skilltags: "fake skilltags 2" },
        { description: "description 3", image: "image 3", skilltags: "fake skilltags 3" },
        { description: "description 4", image: "image 4", skilltags: "fake skilltags 4" },
    ];

    return (
        <div style={{ border: "solid", padding: "5px" }}>
            <h1>ClientListingList component</h1>
            <div style={{ display: "flex" }}>
                {fakeClientListingItems.map((item) => (
                    <ClientListingItem props={item} />
                ))}
            </div>
            <MakeListingModal />
        </div>
    );
}

export default ClientListingList;