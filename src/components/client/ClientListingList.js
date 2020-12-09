import React, { useState, useEffect } from "react";
import ClientListingItem from "./ClientListingItem";
import MakeListingModal from "./MakeListingModal";
import { ToastProvider } from "react-toast-notifications";
import { Spinner } from "react-bootstrap";

const ClientListingList = ({ active, listings, refreshListings }) => {
    console.log("listings in clientlistinglist: ", listings);
    const showAddButton = () => {
        if (active) {
            return (
                <ToastProvider placement="top-center">
                    <MakeListingModal refreshListings={refreshListings} />
                </ToastProvider>
            )
        }
    }

    const showListings = () => {
        if (listings === null) {
            return <Spinner style={{ textAlign: "center" }} animation="border" />;
        }
        else {
            return (
                listings.map((item) => (
                    <ClientListingItem key={item.id} props={item} />
                ))
            )
        }
    }
    return (
        <div>
            {showAddButton()}
            <div className="listingAndFeedTab">
                {showListings()}
            </div>
        </div>
    );
}

export default ClientListingList;
