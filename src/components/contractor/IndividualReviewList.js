import React, { useState, useEffect } from "react";
import { Spinner } from "react-bootstrap";
import ReviewItem from "./ReviewItem"
import { getReviews } from "../../firebase/Contractor";

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
    console.log(revItems);
    if (!revItems && !noRev) {
        return(
            <div>
            <div className="listingAndFeedTab">
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
            <div className="listingAndFeedTab">
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
                </div>
            </div>
        );
    }
};

export default IndividualReviewList;