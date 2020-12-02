import React from "react";
import { Navbar, Nav } from "react-bootstrap";
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <Navbar
            bg="dark"
            variant="dark"
        >
            <Navbar.Text>&copy; Dirty-Devs 2020</Navbar.Text>
            <Nav>
                <Nav.Link as={Link} to="/about">
                    About Us
                </Nav.Link>
            </Nav>

        </Navbar>
    );
}

export default Footer;