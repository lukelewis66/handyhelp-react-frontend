import React from "react";
import FeedItem from "./FeedItem";
import { Spinner } from "react-bootstrap";


const IndividualFeedList = ({ feedItems }) => {
  const showFeed = () => {
    if (feedItems === null) {
      return <Spinner animation="border" />
    }
    else {
      if (feedItems.length === 0) {
        return <h3>Contractor has nothing on their feed.</h3>
      }
      else {
        return feedItems.map(item => (
          <FeedItem key={item.id} props={item} />
        ));
      }
    }
  };

  return (
    <div className="listingAndFeedTab">
      {showFeed()}
    </div>
  );
};

export default IndividualFeedList;
