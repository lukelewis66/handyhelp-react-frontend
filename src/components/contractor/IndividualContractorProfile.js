import React, { useState, useEffect, useRef, useParams } from "react";
import { distance } from "../../gmaps/distance";
import IndividualFeedList from "./IndividualFeedList";
import ReviewList from "./ReviewList";
import BioList from "./BioList";
import ContractorEditProfile from "./ContractorEditProfile";
import IndividualContractorPhoto from "./IndividualContractorPhoto";
import IndividualContractorInfo from "./IndividualContractorInfo";
import { getContractor } from "../../firebase/Contractor";

import { Nav } from "react-bootstrap";
import { getUserInfo } from "../../firebase/Client";
//https://react-bootstrap.netlify.app/components/navs/

const IndividualContractorProfile = ({ contractor }) => {
  console.log("|||||||||||||: ", contractor);
  const [active, setActive] = useState("Feed");

  const [c_UID] = useState(contractor.c_UID);
  console.log("Getting contractor id: ", c_UID);

  const showActive = () => {
    switch (active) {
      case "Reviews":
        return <ReviewList />;
      default:
        return <IndividualFeedList c_UID={c_UID} />;
    }
  };

  return (
    <div>
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
            <h1>Contractor: {contractor.name}</h1>
            <h3>Based in {contractor.location_string}</h3>
            <p>{contractor.bio}</p>
          </div>
        </div>
      </div>
      <Nav
        fill
        variant="tabs"
        className="tabsStyle"
        activeKey={active}
        onSelect={(activeKey) => setActive(activeKey)}
      >
        <Nav.Item>
          <Nav.Link eventKey="Feed">Feed</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="Reviews">Reviews</Nav.Link>
        </Nav.Item>
      </Nav>
      {showActive()}
    </div>
  );
};

export default IndividualContractorProfile;
