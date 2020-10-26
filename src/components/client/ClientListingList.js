import React from "react";

import ClientListingItem from "./ClientListingItem";
import MakeListingModal from "./MakeListingModal";

const ClientListingList = ({ active }) => {
    const fakeClientListingItems = [
        { id: 1, description: "description 1", image: "https://handyhelpimages.s3-us-west-1.amazonaws.com/listingItem1.jpg", skilltags: "fake skilltags 1" },
        { id: 2, description: "description 2", image: "https://handyhelpimages.s3-us-west-1.amazonaws.com/listingItem2.jpg", skilltags: "fake skilltags 2" },
        { id: 3, description: "description 3", image: "https://handyhelpimages.s3-us-west-1.amazonaws.com/listingItem3.jpg", skilltags: "fake skilltags 3" },
        { id: 4, description: "description 4", image: "https://handyhelpimages.s3-us-west-1.amazonaws.com/listingItem4.jpg", skilltags: "fake skilltags 4" },
    ];

    return (
        <div className="component-border">
            <h1>ClientListingList component</h1>
            <h4>({active ? "Query Active Listings" : "Query Inactive Listings"})</h4>
            <div className="flex-list">
                {fakeClientListingItems.map((item) => (
                    <ClientListingItem key={item.id} props={item} />
                ))}
            </div>
            <MakeListingModal />
        </div>
    );
}

export default ClientListingList;