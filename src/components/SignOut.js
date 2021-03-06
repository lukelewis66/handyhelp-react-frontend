import React from "react";

import { Button } from "react-bootstrap";

import { signOut } from "../firebase/authFunctions";

const SignOut = () => {
    const handleSignOut = () => {
        signOut().then(() => window.location.assign("/")).catch(() => alert("Something went wrong. Please try again."));
    }
    return (
        <Button className="sign-button" onClick={handleSignOut}>Sign Out</Button>
    )
}

export default SignOut;