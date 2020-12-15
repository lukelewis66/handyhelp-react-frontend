import React from "react";
import { Spinner } from "react-bootstrap";
import { ToastProvider } from "react-toast-notifications";
import ReviewItem from "./ReviewItem"
import MakeReviewModal from "../pages/MakeReviewModal";

const IndividualReviewList = ({ c_UID, reviewItems, refreshReviews }) => {
  const showReviews = () => {
    if (reviewItems === null) {
      return <Spinner animation="border" />
    }
    else {
      if (reviewItems.length === 0) {
        return <h3>Contractor has no reviews.</h3>
      }
      else {
        return reviewItems.map(item => (
          <ReviewItem key={item.id} props={item} />
        ));
      }
    }
  };

  return (
    <div className="tabStyle">
      {showReviews()}
      <ToastProvider><MakeReviewModal UID={c_UID} refreshReviews={refreshReviews} /></ToastProvider>
    </div>
  );
};

export default IndividualReviewList;