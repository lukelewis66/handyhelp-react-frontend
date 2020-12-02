import React, { useState, useEffect } from "react";
import ClientListingItem from "./ClientListingItem";
import MakeListingModal from "./MakeListingModal";
import { getAllListings } from "../../firebase/Client";

const ClientListingList = ({ active }) => {
    const [listingItems, setListingItems] = useState([]);
    useEffect(() => {
        getAllListings(localStorage.getItem("UID"), active).then((list) => {
            console.log("listings retrieved on clientlistinglist: ", list);
            setListingItems(list);
        })
    }, []);

    return (
        <div>
            <div className="listingAndFeedTab">
                {listingItems.map((item) => (
                    <ClientListingItem key={item.id} props={item} />
                ))}

            </div>
            <MakeListingModal />
        </div>
    );
}

export default ClientListingList;
