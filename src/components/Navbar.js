
import React, { useState } from 'react';

import { Link } from 'react-router-dom';
import { Navbar as BootNav, Nav } from "react-bootstrap"; //need to rename Bootstrap Navbar since we have our own Navbar component
import SignIn from "./SignIn";
import SignUp from "./SignUp";
import SignOut from "./SignOut";

//https://react-bootstrap.netlify.app/components/navbar/#navbars

const Navbar = ({ activepage, isClient }) => {

  console.log("isClient: " + isClient);

  const UID = localStorage.getItem("UID");
  if (UID) {
    console.log("someone is logged in w UID: ", UID);

  }
  else {
    console.log("nobody is logged in");
  }



  const [active, setActive] = useState(activepage); //activepage (from url) passed in by App on first render (e.g. on a browser refresh)

  const authButtons = () => {
    var authBtns;
    if (UID) {
      return (
        <Nav>
          <SignOut />
        </Nav>
      );
    } else {
      return (
        <Nav>
          <SignUp />
          <SignIn />
        </Nav>
      );
    }
  }

  if (isClient === 1) {
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
                to="/searchcontractors"
                eventKey="/searchcontractors"
              >Search Contractors</Nav.Link>

            </Nav>
            {authButtons()}


          </BootNav.Collapse>
        </BootNav>
      </div>

    );
  }

  else if (isClient === 0) {
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
                to="/contractor"
                eventKey="/contractor"
              >Contractor</Nav.Link>

              <Nav.Link
                as={Link}
                to="/searchlistings"
                eventKey="/searchlistings"
              >Search Listings</Nav.Link>

            </Nav>
            {authButtons()}


          </BootNav.Collapse>
        </BootNav>
      </div>

    )
  }
  else if (isClient === 2) {
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
            </Nav>
            {authButtons()}


          </BootNav.Collapse>
        </BootNav>
      </div>

    );
  }
  else {
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
              <Nav.Link as={Link} to="/" eventKey="/">Home</Nav.Link>
            </Nav>
            {authButtons()}


          </BootNav.Collapse>
        </BootNav>
      </div>

    );
  }
}
export default Navbar;
