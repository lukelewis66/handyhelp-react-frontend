import React, { useState, useEffect } from "react";
import ClientListingItem from "./ClientListingItem";
import MakeListingModal from "./MakeListingModal";
import { getAllListings} from "../../firebase/Client";
import { ToastProvider } from "react-toast-notifications";

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
            <ToastProvider placement = 'top-center'> <MakeListingModal /> </ToastProvider>
        </div>
    );
}

export default ClientInactiveListingList;