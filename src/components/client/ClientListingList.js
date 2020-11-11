import React, { useState, useEffect } from "react";
import { Button } from "react-bootstrap"
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

    /*
    const fakeClientListingItems = [
        { id: 1, description: "description 1", image: "https://handyhelpimages.s3-us-west-1.amazonaws.com/listingItem1.jpg", skilltags: "fake skilltags 1" },
        { id: 2, description: "description 2", image: "https://handyhelpimages.s3-us-west-1.amazonaws.com/listingItem2.jpg", skilltags: "fake skilltags 2" },
        { id: 3, description: "description 3", image: "https://handyhelpimages.s3-us-west-1.amazonaws.com/listingItem3.jpg", skilltags: "fake skilltags 3" },
        { id: 4, description: "description 4", image: "https://handyhelpimages.s3-us-west-1.amazonaws.com/listingItem4.jpg", skilltags: "fake skilltags 4" },
    ];
    */
    /*
    function logListingItems() {
        console.log(listingItems);
    }
    */
    return (
        <div>
            {/* <h4>({active ? "Query Active Listings" : "Query Inactive Listings"})</h4> */}

            <div className="flex-list">
                {listingItems.map((item) => (
                    <ClientListingItem key={item.id} props={item} />
                ))}

            </div>
            <MakeListingModal />
        </div>
    );
}

export default ClientListingList;
