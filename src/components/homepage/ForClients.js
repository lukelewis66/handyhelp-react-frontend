import React from "react";

const ForClients = () => {
    return (<div className="homepage-description">
        <div className="homepage-description-blurb">
            <div className="homepage-blurb-text">
                <h2>Set Up Your Account</h2>
                <h5>When you sign up for the first time, you will be automatically prompted to set up your account. Make sure you choose to be a client in the set up form.</h5>
            </div>
            <div className="homepage-blurb-image">
                <img src={require('../../homepage-photos/user.png')} alt="user symbol" />
            </div>
        </div>
        <div className="homepage-description-blurb">
            <div className="homepage-blurb-image">
                <img src={require('../../homepage-photos/plus.png')} alt="plus symbol" />
            </div>

            <div className="homepage-blurb-text">
                <h2>Create a Listing</h2>
                <h5>Need help with a certain project? Create a listing! This can be done in your client profile. Once you have filled out the necessary information to describe your issue,
                contractors on HandyHelp will be able to see your listing,
                and they will be able to contact you if they are interested in helping out.
            </h5>
            </div>
        </div>
        <div className="homepage-description-blurb">
            <div className="homepage-blurb-text">
                <h2>Search for Contractors</h2>
                <h5>Search for contractors on HandyHelp near you through the Search Contractors tab. Here you can filter through all of HandyHelp's Contractors based off location
                and their skills in order to find one that will be able to help you out. When you find a contractor you might like, you can view their profile
                and look at their feed and reviews in order to get a better picture of what they are like.
                </h5>
            </div>
            <div className="homepage-blurb-image">
                <img src={require('../../homepage-photos/loupe.png')} alt="search symbol" />
            </div>
        </div>
        <div className="homepage-description-blurb">
            <div className="homepage-blurb-image">
                <img src={require('../../homepage-photos/send.png')} alt="send symbol" />
            </div>
            <div className="homepage-blurb-text">
                <h2>Send a Message</h2>
                <h5>Interested in a contractor? Send them a message so that you can
                set up a potential contract. View the individual contractor and click on the send message button to begin the process.
                Your message will be sent using a secure messaing system straight to the client's email.
            </h5>
            </div>
        </div>
        <div className="homepage-description-blurb">
            <div className="homepage-blurb-text">
                <h2>Write a Review</h2>
                <h5>How was your experience with the contractor? Were they great? Horrible? Either way, leaving
                a review will help both you and other clients make their decisions in the future.
                </h5>
            </div>
            <div className="homepage-blurb-image">
                <img src={require('../../homepage-photos/star.png')} alt="star symbol" />
            </div>
        </div>
        <div style={{ fontSize: "10px" }}>Icons made by <a href="https://www.flaticon.com/authors/smashicons" title="Smashicons">Smashicons</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a></div>
    </div>);
}

export default ForClients;