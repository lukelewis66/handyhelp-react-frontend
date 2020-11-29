import userEvent from "@testing-library/user-event";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import { getContractor } from "../../firebase/Contractor";
import { getUserLocation } from "../../firebase/accountFunctions.js";
import { distance } from "../../gmaps/distance";
import IndividualContractorProfile from "../contractor/IndividualContractorProfile"
import MakeReviewModal from "./MakeReviewModal";

const IndividualContractor = () => {
  const [apiCalls, setApiCalls] = useState(0);
  const [user, setUser] = useState({
    location: [0, 0],
  });
  let { UID } = useParams();
  UID = UID.substring(4, UID.length);
  const [con, setcon] = useState({
    c_UID: UID,
  });
  

  useEffect(() => {
    console.log("individual contractor useeffect | UID: ", UID);
    getContractor(UID).then((contractor) => {
    console.log(">>>>>>>>>>>>>>>>",contractor);
    setcon(contractor);
  })}
  , []);

  return (
    <div className = "screen">
      <IndividualContractorProfile contractor={con}/>
    </div>
  )
  // 
};

export default IndividualContractor;
//return (
  //   <div>
  //     <h1>Contractor: {contractor.name}</h1>
  //     <h2>Bio: {contractor.bio}</h2>
  //     <h2>Last Active: {contractor.last_active}</h2>
  //     <h2>Rating: {contractor.rating.toFixed(1)}</h2>
  //     <h3>Location: {contractor.location}</h3>
  //     <h2>
  //       Distance:{" "}
  //       {distance(
  //         user.location[1],
  //         user.location[0],
  //         contractor.location[1],
  //         contractor.location[0]
  //       ).toFixed(1)}{" "}
  //       miles
  //     </h2>
  //     <h2>Api Calls: {apiCalls}</h2>
  //       <MakeReviewModal UID={conUID}/>
  //   </div>
  // );