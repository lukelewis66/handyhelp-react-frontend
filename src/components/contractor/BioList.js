import React from "react"

const BioList = () => {
    return (
        <div className="component-border">
            <h1>BioList component</h1>
            <div className="box">
                <img alt="Profile Picture" className="profilePhoto" src="https://handyhelpimages.s3-us-west-1.amazonaws.com/ContractorProfilePic.jpg" />
                <div className="component-border">
                    <li>BioList FullName</li>
                </div>
                <div className="component-border">
                    <li>BioList Age</li>
                </div>
                <div className="component-border">
                    <li>BioList Gender</li>
                </div>
                <div className="component-border">
                    <li>BioList Location</li>
                </div>
                <div className="component-border">
                    <li>BioList Summary</li>
                </div>
                <div className="component-border">
                    <li>BioList Email</li>
                </div>
                <div className="component-border">
                    <li>BioList Phone</li>
                </div>
            </div>
        </div>
    )
}

export default BioList