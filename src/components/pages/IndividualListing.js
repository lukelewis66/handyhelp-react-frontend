import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import { getUserInfo, getListing } from "../../firebase/Client";
import { getUserLocation } from "../../firebase/accountFunctions.js";
import { distance } from "../../gmaps/distance.js";
import { Image } from "react-bootstrap";
import Message from "../Message";
import Carousel from "react-bootstrap/Carousel";

const IndividualListing = () => {
  const [apiCalls, setApiCalls] = useState(0);
  const [listing, setListing] = useState({
    description: "Default",
    images: ["/hammer-icon.jpg", "/hammer-icon.jpg"],
    skilltags: [],
    title: "Name",
    client: "",
  });
  const [thisUser, setThisUser] = useState({
    location: [0, 0],
  });
  const [userInfo, setUserinfo] = useState({
    location: [0, 0],
  });
  let { LID } = useParams();
  LID = LID.substring(4, LID.length);
  useEffect(() => {
    console.log("individual listing useEffect");
    if (apiCalls >= 5) {
      console.log("api call limit (5) reached!");
    } else {
      getListing(LID)
        .then((data) => {
          setListing(data);
          setApiCalls(apiCalls + 1);
          getUserInfo(data["client"])
            .then((data) => {
              setApiCalls(apiCalls + 1);
              setUserinfo(data);
              console.log("setting user info");
            })
            .catch((err) => {
              console.log(err);
            });
        })
        .catch((err) => console.log("rejected in IndividLisiting" + err));
      var UID = localStorage.getItem("UID");
      getUserLocation(UID).then((user) => {
        setApiCalls(apiCalls + 1);
        setThisUser(user);
      });
    }
  }, []);

  return (
    <div class="screen">
      <div className="profileHeader">
        <div className="profile-photo2">
          <div className="profilePhoto2">

            <Carousel>
              {listing.images.map((item) => (
                <Carousel.Item>
                  <Image className="d-block w-100" src={item} />
                </Carousel.Item>
              ))}
            </Carousel>
          </div>
        </div>
        <div class="vert">
          <div className="infoPanelCon2">
            <div class="profile-info2">
              <h1>Project: {listing.title}</h1>
              <h3>Based in {userInfo.location_string}</h3>
              <h3>
                Distance:{" "}
                {distance(
                  thisUser.location[0],
                  thisUser.location[1],
                  userInfo.location[0],
                  userInfo.location[1]
                ).toFixed(1)}{" "}
                miles
              </h3>
            </div>
          </div>
          <div className="infoPanelCon2">
            <div class="profile-info2">
              <h1>Description</h1>
              <hr class="rounded" />
              <h2>{listing.description}</h2>
              <br></br>
              <Message UID={listing.client} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default IndividualListing;
