import React from "react";
import { Image } from "react-bootstrap";

const IndividualContractorPhoto = ({ photoURL }) => {
  console.log(photoURL);

  return <Image fluid src={photoURL ? photoURL : "/contractor-anon.jpg"} />;
};

export default IndividualContractorPhoto;
