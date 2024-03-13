import React, { useState } from "react";
import CartWidget from "./CartWidget";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';


const NavBar = () => {
 return (
    <Navbar bg="light" data-bs-theme="light">
        <Container>
          <Navbar.Brand href="#home">Real Beauty</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#bases">Bases</Nav.Link>
            <Nav.Link href="#sombras">Sombras</Nav.Link>
            <Nav.Link href="#labiales">Labiales</Nav.Link>
            <Nav.Link href="#delineadores">Delineadores</Nav.Link>
            <Nav.Link href="#mascaras">Máscaras</Nav.Link>
            <Nav.Link href="#mascaras">Otros</Nav.Link>
            </Nav>
          <CartWidget />
        </Container>
      </Navbar>
 );
};

export default NavBar;