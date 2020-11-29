import React, { useState, useEffect, useRef, useParams} from "react";

import IndividualFeedList from "./IndividualFeedList";
import ReviewList from "./ReviewList";
import BioList from "./BioList";
import ContractorEditProfile from "./ContractorEditProfile";
import IndividualContractorPhoto from "./IndividualContractorPhoto"
import IndividualContractorInfo from "./IndividualContractorInfo"
import { getContractor } from "../../firebase/Contractor";


import { Nav } from "react-bootstrap";
//https://react-bootstrap.netlify.app/components/navs/

const IndividualContractorProfile = ({contractor}) => {
    console.log("|||||||||||||: ", contractor);
    const [active, setActive] = useState("Feed");
    
    const [c_UID] = useState(contractor.c_UID);
    console.log("Getting contractor id: ", c_UID);

    const showActive = () => {
        switch (active) {
            case "Reviews":
                return <ReviewList />
            default:
                return <IndividualFeedList c_UID={c_UID}/>
        }
    }

    

    return (
        <div>
            <div className = "">
                <div className = "profileHeader">
                    <IndividualContractorPhoto photoURL={contractor.profilepic}/>
                    <IndividualContractorInfo props={contractor}/>
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
}

export default IndividualContractorProfile;
