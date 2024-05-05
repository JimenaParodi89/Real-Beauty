import React, { useState } from "react";
import CartWidget from "./CartWidget";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { NavLink } from "react-router-dom";


const NavBar = () => {
 return (
    <Navbar bg="light" data-bs-theme="light">
        <Container>
          <Navbar.Brand to="/" as={NavLink}>Real Beauty</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link to="/category/bases" as={NavLink}>Bases</Nav.Link>
            <Nav.Link to="/category/sombras" as={NavLink}>Sombras</Nav.Link>
            <Nav.Link to="/category/labiales" as={NavLink}>Labiales</Nav.Link>
            </Nav>
          <CartWidget />
        </Container>
      </Navbar>
 );
};

export default NavBar;