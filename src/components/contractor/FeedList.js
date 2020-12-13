import React from "react";
import FeedItem from "./FeedItem";
import MakeFeedItemModal from "./MakeFeedItemModal";
import { ToastProvider } from "react-toast-notifications";
import { Spinner } from "react-bootstrap";

const FeedList = ({ feedItems }) => {

    const showFeed = () => {
        if (feedItems === null) {
            return <Spinner animation="border" />
        }
        else {
            if (feedItems.length === 0) {
                return <h3>Feed is empty.</h3>
            }
            else {
                return feedItems.map((item) => (
                    <FeedItem key={item.id} props={item} />
                ));
            }
        }
    }
    return (
        <div >
            <div className="listingAndFeedTab">
                {showFeed()}
            </div>
            <ToastProvider placement='top-center'> <MakeFeedItemModal /> </ToastProvider>
        </div>
    );
}

export default FeedList;

