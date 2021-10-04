import React, { useState, useEffect } from 'react';
import { Col, Container, Row, Navbar, Nav, NavDropdown, Carousel, CardGroup } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import './Header.css'
const Header = () => {

    return (

        <Navbar bg="dark" variant="dark" expand="lg">
            <Container>
                <Navbar.Brand href="#home">Unique Dance Academy</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <NavLink className="title" to="/home">HOME</NavLink>
                        <NavLink className="title" to="/about">ABOUT</NavLink>
                        <NavLink className="title" to="/services">Services</NavLink>
                        <NavLink className="title" to="/contact">Contact</NavLink>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>

    );

};


export default Header;