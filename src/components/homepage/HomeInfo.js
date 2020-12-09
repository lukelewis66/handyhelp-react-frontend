import React, { useState } from "react";
import { Nav } from "react-bootstrap";
import ForClients from "../homepage/ForClients";
import ForContractors from "../homepage/ForContractors";


const HomeInfo = () => {
    const [active, setActive] = useState("ForClients");

    const showActive = () => {
        switch (active) {
            case "ForContractors":
                return <ForContractors />;
            default:
                return <ForClients />;
        }
    }

    return (
        <div style={{ textAlign: "center", marginTop: "2rem" }}>
            <h1>How does HandyHelp work?</h1>
            <Nav fill variant="tabs" className="tabsStyle" activeKey={active} onSelect={(activeKey) => setActive(activeKey)}>
                <Nav.Item >
                    <Nav.Link eventKey="ForClients">For Clients</Nav.Link>
                </Nav.Item>
                <Nav.Item >
                    <Nav.Link eventKey="ForContractors">For Contractors</Nav.Link>
                </Nav.Item>
            </Nav>
            {showActive()}
        </div>
    )
}

export default HomeInfo;