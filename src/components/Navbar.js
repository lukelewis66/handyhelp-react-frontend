
import React, { useState } from 'react';

import { Link } from 'react-router-dom';
import { Navbar as BootNav, Nav } from "react-bootstrap"; //need to rename Bootstrap Navbar since we have our own Navbar component
import SignIn from "./SignIn";
import SignUp from "./SignUp";

//https://react-bootstrap.netlify.app/components/navbar/#navbars

const Navbar = ({ activepage }) => {
  // How we declare states in functional components (must import and use useState())
  //
  //    syntax is:
  //    const [someState, setSomeState] = useState(initialValue)
  //
  // anytime a setter is called, the component will re-render
  const [active, setActive] = useState(activepage); //activepage (from url) passed in by App on first render (e.g. on a browser refresh)

  return (
    <div>
      <BootNav
        expand="md"
        bg="dark"
        variant="dark"
      >
        <BootNav.Toggle aria-controls="basic-navbar-nav" />
        <BootNav.Collapse id="responsive-navbar-nav">
          <Nav className="mr-auto" activeKey={active} onSelect={activeKey => setActive(activeKey)}>
            <Nav.Link
              as={Link}
              to="/"
              //checks after every render
              //active={active === "Home"}
              // Re-renders the component
              eventKey="/"
            //onClick={() => setActive("Home")}
            >Home</Nav.Link>
            <Nav.Link
              as={Link}
              to="/client"
              eventKey="/client"
            >Client</Nav.Link>
            <Nav.Link
              as={Link}
              to="/contractor"
              eventKey="/contractor"
            >Contractor</Nav.Link>
            <Nav.Link
              as={Link}
              to="/searchlistings"
              eventKey="/searchlistings"
            >Search Listings</Nav.Link>
            <Nav.Link
              as={Link}
              to="/searchcontractors"
              eventKey="/searchcontractors"
            >Search Contractors</Nav.Link>
            <Nav.Link
              as={Link}
              to="/firebaseplayground"
              eventKey="/firebaseplayground">Firebase Playground</Nav.Link>
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
