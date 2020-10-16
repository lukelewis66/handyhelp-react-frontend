import React from "react";

import ClientListingList from "./ClientListingList";

const ClientProfile = () => {
    return (
        <div style={{ border: "solid", padding: "5px" }}>
            <h1>ClientProfile component</h1>
            <div style={{ paddingLeft: "50px" }}>
                <ClientListingList />
            </div>
        </div>
    );
}

export default ClientProfile;