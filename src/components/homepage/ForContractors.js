import React from "react";

const ForContractors = () => {
    return (<div className="homepage-description">
        <div className="homepage-description-blurb">
            <div className="homepage-blurb-text">
                <h2>Set Up Your Account</h2>
                <h5>When you sign up for the first time, you will be automatically prompted to set up your account. Make sure you choose to be a contractor in the set up form.</h5>
            </div>
            <div className="homepage-blurb-image">
                <img src={require('../../homepage-photos/user.png')} alt="user symbol" />
            </div>
        </div>
        <div className="homepage-description-blurb">
            <div className="homepage-blurb-image">
                <img src={require('../../homepage-photos/pencil.png')} alt="pencil symbol" />
            </div>
            <div className="homepage-blurb-text">
                <h2>Update Your Profile</h2>
                <h5>The best way that you can attract clients is by having an up to date profile. In your contractor profile, you can upload an image of yourself, update your skill tags, and create posts for your feed,
                so that clients can get a better picture of who you are and what you do.
            </h5>
            </div>
        </div>
        <div className="homepage-description-blurb">
            <div className="homepage-blurb-text">
                <h2>Search for Listings</h2>
                <h5>Looking for work? Search for listings that HandyHelp clients have posted on the Search Listings tab. Here, you can see all of the
                current active listings on HandyHelp, and further filter them based off location and skill tags. When you've decided on a potential listing,
                you can view the individual listing.
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
                <h5>Interested in a listing? Send the client a message so that you can
                set up a potential contract. View the individual listing and click on the send message button to begin the process.
                Your message will be sent using a secure messaing system straight to the client's email.
            </h5>
            </div>
        </div>
        <div style={{ fontSize: "10px" }}>Icons made by <a href="https://www.flaticon.com/authors/smashicons" title="Smashicons">Smashicons</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a></div>

    </div>);
}

export default ForContractors;