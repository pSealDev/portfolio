import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../App.css';
import { NavDropdown, Navbar, Nav, Container } from 'react-bootstrap';


const Navigation = () => {
    return (
        <>
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand href="/">Priscilla Seal</Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link as={Link}  to="/">Home</Nav.Link>
                            <Nav.Link as={Link} to="./projects">Projects</Nav.Link>
                            <Nav.Link as={Link} to="./contact">Linkedin</Nav.Link>
                            {/* <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
                                <NavDropdown.Item href="/">Home</NavDropdown.Item>
                                <NavDropdown.Item href="/about">About</NavDropdown.Item>
                                <NavDropdown.Item href="/projects">Projects</NavDropdown.Item>
                                <NavDropdown.Item href="/contact">Contact</NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                            </NavDropdown> */}
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>

            {/* <ul>
                     <li><Link to="/">Home</Link></li>
                    <li><Link to="/about">About</Link></li>
                     <li><Link to="/projects">Projects</Link></li>
                    <li><Link to="/contact">Contact</Link></li>
                </ul> */}



        </>

    );
}

export default Navigation;