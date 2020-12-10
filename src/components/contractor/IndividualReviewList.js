import React, { useState, useEffect } from "react";
import { Spinner } from "react-bootstrap";
import { ToastProvider } from "react-toast-notifications";
import ReviewItem from "./ReviewItem"
import { getReviews } from "../../firebase/Contractor";
import MakeReviewModal from "../pages/MakeReviewModal";

const IndividualReviewList = ({ c_UID }) => {
    const [revItems, setRevItems] = useState();
    const [noRev, setRev] = useState(0);

    useEffect(() => {
        console.log("Before", c_UID);
        getReviews(c_UID).then((list) => {
          console.log("feed items retrieved on feedlist: ", list);
          setRevItems(list);
          setRev(1);
    
        });
    }, []);
    
    if (!revItems && !noRev) {
        return(
            <div>
            <div className="tabStyle">
              <div className="flex-list">
                <Spinner animation="border" />
              </div>
            </div>
          </div>
           
        ); 
      }
    else if(!revItems && noRev){
        return(
            <div>
            <div className="tabStyle">
              <div className="flex-list">
                No Reviews Found
              </div>
            </div>
          </div>
        );
    }
    else {
        return (
            <div className = "tabStyle">
                <div className = "reviews"> 
                    {revItems.map((item) => (
                        <ReviewItem key={item.id} props={item} />
                    ))}
                    <ToastProvider><MakeReviewModal UID={c_UID}/></ToastProvider>
                    
                </div>
            </div>
        );
    }
};

export default IndividualReviewList;