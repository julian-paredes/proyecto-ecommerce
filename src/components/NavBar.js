import React from "react";
import { Navbar, Nav } from "react-bootstrap";
import { Container } from "react-bootstrap";

function NavBar( {children}) {

    return(
            <Navbar className="nav-bar" expand="lg">
            <Container>
                <Navbar.Brand className="nav-name" href="#home">Wall's Music</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="me-auto">
                    <Nav.Link className="navlink" href="#home">Guitarras</Nav.Link>
                    <Nav.Link className="navlink" href="#link">Bajos</Nav.Link>
                    <Nav.Link className="navlink" href="#link">Baterías</Nav.Link>
                    <Nav.Link className="navlink" href="#link">Amplificadores</Nav.Link>
                    <Nav.Link className="navlink" href="#link">Efectos</Nav.Link>
                </Nav>
                <Nav className="nav-right">
                    <Nav.Link className="navlink nav-cart" href="#cart">{children}</Nav.Link>
                </Nav>
                </Navbar.Collapse>
            </Container>
            </Navbar>
    )
};

export {NavBar};