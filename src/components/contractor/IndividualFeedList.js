import React, { useState, useEffect } from "react";
import FeedItem from "./FeedItem";
import { getAllFeedItems } from "../../firebase/Contractor";
import { Spinner } from "react-bootstrap";
import { ToastProvider } from "react-toast-notifications";
import MakeFeedItemModal from "./MakeFeedItemModal";


const IndividualFeedList = ({ c_UID }) => {
  const [feedItems, setFeedItems] = useState();
  const [noFeed, setFeed] = useState(0);
  useEffect(() => {
    console.log("Before Get all Feed Items: ", c_UID);
    getAllFeedItems(c_UID).then((list) => {
      console.log("feed items retrieved on feedlist: ", list);
      setFeedItems(list);
      setFeed(1);

    });
  }, []);

  if (!feedItems && !noFeed) {
    return (
      <div>
        <div className="listingAndFeedTab">
          <div className="flex-list">
            <Spinner animation="border" />
          </div>
        </div>
      </div>

    );
  } else if (!feedItems && noFeed) {
    return (
      <div>
        <div className="listingAndFeedTab">
          <div className="flex-list">
            No Feed Found
          </div>
        </div>
      </div>
    );
  }
  else {
    return (
      <div>
        <div className="listingAndFeedTab">
          {feedItems.map((item) => (
            <FeedItem key={item.id} props={item} />
          ))}
        </div>
      </div>
    );
  }
};

export default IndividualFeedList;
