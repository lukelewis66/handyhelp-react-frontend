import userEvent from "@testing-library/user-event";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import { getContractor } from "../../firebase/Contractor";
import { getUserLocation } from "../../firebase/accountFunctions.js";
import { distance } from "../../gmaps/distance";
import MakeReviewModal from "./MakeReviewModal";
import { ToastProvider } from "react-toast-notifications";

const IndividualContractor = () => {
  const [apiCalls, setApiCalls] = useState(0);
  const [contractor, setContractor] = useState({
    description: "No description",
    email: "No Email",
    image: "",
    skilltags: [],
    rating: 0,
    name: "Anonymous",
    location: [0, 0],
  });
  const [user, setUser] = useState({
    location: [0, 0],
  });
  let { UID } = useParams();
  const [conUID, setconUID] = useState("");
  
  useEffect(() => {
    UID = UID.substring(4, UID.length);
    setconUID(UID);
    console.log("individual contractor useeffect");
    console.log("UID: ", UID);
    getContractor(UID).then((contractor) => {
      setApiCalls(apiCalls + 1);
      setContractor(contractor);
    });
    getUserLocation(localStorage.getItem("UID")).then((user) => {
      //if(user.role)
      setApiCalls(apiCalls + 1);
      setUser(user);
    });
  }, []);

  return (
    <div>
      <h1>Contractor: {contractor.name}</h1>
      <h2>Bio: {contractor.bio}</h2>
      <h2>Last Active: {contractor.last_active}</h2>
      <h2>Rating: {contractor.rating.toFixed(1)}</h2>
      <h3>Location: {contractor.location}</h3>
      <h2>
        Distance:{" "}
        {distance(
          user.location[1],
          user.location[0],
          contractor.location[1],
          contractor.location[0]
        ).toFixed(1)}{" "}
        miles
      </h2>
      <h2>Api Calls: {apiCalls}</h2>
      <ToastProvider placement='top-center'> <MakeReviewModal UID={conUID}/> </ToastProvider>
    </div>
  );
};

export default IndividualContractor;
