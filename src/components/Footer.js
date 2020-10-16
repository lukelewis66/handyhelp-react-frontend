import React from "react";
import { Navbar } from "react-bootstrap";

const Footer = () => {
    return (
        <Navbar
            bg="dark"
            variant="dark"
        >
            <Navbar.Brand> Footer Component </Navbar.Brand>
            <Navbar.Text>&copy; Dirty-Devs 2020</Navbar.Text>
        </Navbar>
    );
}

export default Footer;