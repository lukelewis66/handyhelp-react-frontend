
import React from 'react';

import { Link } from 'react-router-dom';
import { Navbar as BootNav, Nav } from "react-bootstrap";
import SignIn from "./SignIn";
import SignUp from "./SignUp";

//https://react-bootstrap.netlify.app/components/navbar/#navbars

function Navbar() {
  return (
    <div>
      {/* <div style={{ display: "flex" }}>
        <Link className="component-border" to="/">Home</Link>{" "}
        <Link className="component-border" to="/client">Client</Link>{" "}
        <Link className="component-border" to="/contractor">Contractor</Link>{" "}
        <Link className="component-border" to="/searchlistings">Search Listings</Link>{" "}
        <Link className="component-border" to="/searchcontractors">Search Contractors</Link>
      </div> */}
      <BootNav
        expand="md"
        bg="dark"
        variant="dark"
      >
        <BootNav.Toggle aria-controls="basic-navbar-nav" />
        <BootNav.Collapse id="responsive-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link
              as={Link}
              to="/"
            >Home</Nav.Link>
            <Nav.Link
              as={Link}
              to="/client"
            >Client</Nav.Link>
            <Nav.Link
              as={Link}
              to="/contractor"
            >Contractor</Nav.Link>
            <Nav.Link
              as={Link}
              to="/searchlistings"
            >Search Listings</Nav.Link>
            <Nav.Link
              as={Link}
              to="/searchcontractors"
            >Search Contractors</Nav.Link>
          </Nav>
          <Nav>
            <SignUp />
            <SignIn />
          </Nav>
        </BootNav.Collapse>
      </BootNav>
    </div>

  );
};
export default Navbar;
