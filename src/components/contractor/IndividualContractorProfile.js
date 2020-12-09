import React, { useState } from "react";
import IndividualFeedList from "./IndividualFeedList";
import ReviewList from "./ReviewList";
import IndividualReviewList from "./IndividualReviewList";
import IndividualContractorPhoto from "./IndividualContractorPhoto";
import IndividualContractorInfo from "./IndividualContractorInfo";
import Message from "../Message";


import { Nav } from "react-bootstrap";
//https://react-bootstrap.netlify.app/components/navs/

const IndividualContractorProfile = ({ contractor }) => {
  console.log("|||||||||||||: ", contractor);
  const [active, setActive] = useState("Feed");

  const [c_UID] = useState(contractor.c_UID);
  console.log("Getting contractor id: ", c_UID);

  const showActive = () => {
    switch (active) {
      case "Reviews":
        return <IndividualReviewList c_UID={c_UID}/>;
      default:
        return <IndividualFeedList c_UID={c_UID} />;
    }
  };
  /*
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
            <h1>{contractor.name}</h1>
            <h3>Based in {contractor.location_string}</h3>
            <p>{contractor.bio}</p>
            <Message UID={c_UID}/>
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
  */
  return (
    <div>
        <div className = "">
            <div className = "profileHeader">
                <IndividualContractorPhoto photoURL={contractor.profilepic} />
                <IndividualContractorInfo c_UID={c_UID}/>
            </div>
        </div>
        <Nav fill variant="tabs" className = "tabsStyle" activeKey={active} onSelect={(activeKey) => setActive(activeKey)}>
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
