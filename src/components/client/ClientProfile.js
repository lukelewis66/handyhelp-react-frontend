import React from "react";

import ClientListingList from "./ClientListingList";

const ClientProfile = () => {
    return (
        <div className="component-border">
            <h1>ClientProfile component</h1>
            <div>
                <ClientListingList />
            </div>
        </div>
    );
}

export default ClientProfile;