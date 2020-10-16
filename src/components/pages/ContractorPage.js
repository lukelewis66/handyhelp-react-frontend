import React from "react";
import ContractorProfile from "../contractor/ContractorProfile";

const ContractorPage = () => {
    return (
        <div style={{ border: "solid", padding: "5px" }}>
            <h1>ContractorPage component</h1>
            <div style={{ paddingLeft: "50px" }}>
                <ContractorProfile />
            </div>
        </div>
    );
}

export default ContractorPage;