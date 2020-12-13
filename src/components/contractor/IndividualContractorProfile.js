import React, { useState, useEffect } from "react";
import IndividualFeedList from "./IndividualFeedList";
import IndividualReviewList from "./IndividualReviewList";
import IndividualContractorPhoto from "./IndividualContractorPhoto";
import IndividualContractorInfo from "./IndividualContractorInfo";
import { getReviews, getAllFeedItems } from "../../firebase/Contractor";


import Message from "../Message";



import { Nav } from "react-bootstrap";
//https://react-bootstrap.netlify.app/components/navs/

const IndividualContractorProfile = ({ contractor }) => {
  const [active, setActive] = useState("Feed");
  const [feedItems, setFeedItems] = useState(null);
  const [reviewItems, setReviewItems] = useState(null);

  const [c_UID] = useState(contractor.c_UID);
  console.log("Getting contractor id: ", c_UID);

  useEffect(() => {
    console.log("Before Get all Feed Items: ", c_UID);
    getAllFeedItems(c_UID).then((list) => {
      console.log("feed items retrieved on feedlist: ", list);
      setFeedItems(list);
    });

    getReviews(c_UID).then((list) => {
      console.log("feed items retrieved on feedlist: ", list);
      setReviewItems(list);
    });
  }, []);

  const refreshReviews = () => {
    getReviews(c_UID).then((list) => {
      console.log("reviews refreshed");
      setReviewItems(list);
    })
  }

  const showActive = () => {
    switch (active) {
      case "Reviews":
        return <IndividualReviewList c_UID={c_UID} reviewItems={reviewItems} refreshReviews={refreshReviews} />;
      default:
        return <IndividualFeedList feedItems={feedItems} />;
    }
  };
  
  function showRating() {
    if (contractor.ratingCount !== 0) {
      return <span className="rating-display">&#9734;{contractor.rating ? contractor.rating.toFixed(2) : "0"}</span>
    }
    else {
      return <span className="rating-display">No Ratings</span>
    }
  }

  return (
    <div>
      {/*
      <div className="profileHeader">
        <div className="profile-photo">
          <div className="profileHeader">
            <div className="profilePhoto2">
              <IndividualContractorPhoto photoURL={contractor.profilepic} />
            </div>
          </div>
        </div>
        <div className="profile-info">
          <div className="infoPanelCon">
            <h1>{contractor.name}</h1>
            <h3>Based in {contractor.location_string}</h3>
            <div>{contractor.rating ? showRating() : ""}</div>
            <p>{contractor.bio}</p>
            <Message UID={c_UID} />
          </div>
        </div>
      </div>
      */}
      <div className = "profileHeader">
        <div className = "profilePhoto">
          <IndividualContractorPhoto photoURL={contractor.profilepic} />
        </div>
        <div>
          <IndividualContractorInfo c_UID = {c_UID} />
          <div className = "messageButton">
            <Message UID={c_UID} />
          </div>

        </div>
      </div>
      <Nav fill variant="tabs" className="tabsStyle" activeKey={active} onSelect={(activeKey) => setActive(activeKey)}>
        <Nav.Item >
          <Nav.Link eventKey="Feed">Feed</Nav.Link>
        </Nav.Item>
        <Nav.Item >
          <Nav.Link eventKey="Reviews">Reviews</Nav.Link>
        </Nav.Item>
      </Nav>
      {showActive()}
    </div>
  );
};

export default IndividualContractorProfile;
