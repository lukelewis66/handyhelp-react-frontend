import React, { useState, useEffect } from "react";
import FeedItem from "./FeedItem";
import MakeFeedItemModal from "./MakeFeedItemModal";
import { getAllFeedItems } from "../../firebase/Contractor";

const FeedList = () => {
    const [feedItems, setFeedItems] = useState([]);
    useEffect(() => {
        getAllFeedItems(localStorage.getItem("UID")).then((list) => {
            console.log("feed items retrieved on feedlist: ", list);
            setFeedItems(list);
        })
    }, []);

    /*
    const fakeFeedItems = [
        { id: 1, description: "description 1", image: "https://handyhelpimages.s3-us-west-1.amazonaws.com/FeedItem1.jpg", skilltags: "fake skilltags 1" },
        { id: 2, description: "description 2", image: "https://handyhelpimages.s3-us-west-1.amazonaws.com/FeedItem2.jpg", skilltags: "fake skilltags 2" },
        { id: 3, description: "description 3", image: "https://handyhelpimages.s3-us-west-1.amazonaws.com/FeedItem3.png", skilltags: "fake skilltags 3" },
        { id: 4, description: "description 4", image: "https://handyhelpimages.s3-us-west-1.amazonaws.com/FeedItem4.jpg", skilltags: "fake skilltags 4" },
        
    ];
    */

    return (
        <div >
            <div className="listingAndFeedTab">
                <div className="flex-list">
                    {feedItems.map((item) => (
                        <FeedItem key={item.id} props={item} />
                    ))}
                </div>
            </div>
            <MakeFeedItemModal />
        </div>
    );
}

export default FeedList;

