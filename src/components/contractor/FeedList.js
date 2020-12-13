import React, { useState, useEffect } from "react";
import FeedItem from "./FeedItem";
import MakeFeedItemModal from "./MakeFeedItemModal";
import { getAllFeedItems } from "../../firebase/Contractor";
import { ToastProvider } from "react-toast-notifications";

const FeedList = () => {
    const [feedItems, setFeedItems] = useState([]);
    useEffect(() => {
        getAllFeedItems(localStorage.getItem("UID")).then((list) => {
            console.log("feed items retrieved on feedlist: ", list);
            setFeedItems(list);
        })
    }, []);

    return (
        <div >
            <div className="listingAndFeedTab">
                {feedItems.map((item) => (
                    <FeedItem key={item.id} props={item} />
                ))}
            </div>
            <ToastProvider placement='top-center'> <MakeFeedItemModal /> </ToastProvider>
        </div>
    );
}

export default FeedList;

