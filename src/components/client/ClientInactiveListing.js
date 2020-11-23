import React, { useState, useEffect } from "react";
import { Button } from "react-bootstrap"
import ClientListingItem from "./ClientListingItem";
import MakeListingModal from "./MakeListingModal";
import { getAllListings, getAllInactiveListings } from "../../firebase/Client";

const ClientInactiveListingList = ({ active }) => {
    const [listingItems, setListingItems] = useState([]);
    useEffect(() => {
        getAllListings(localStorage.getItem("UID"), active).then((list) => {
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

export default ClientInactiveListingList;