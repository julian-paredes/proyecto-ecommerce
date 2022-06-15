import React from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import { LinkContainer } from 'react-router-bootstrap'
import {CartWidget} from './CartWidget';

function NavBar( {children}) {

    return(
            <Navbar sticky="top"className="nav-bar" expand="lg">
            <Container>

            <LinkContainer to={"/"}>
                <Navbar.Brand className="nav-name nav-left">Wall's Music</Navbar.Brand>
            </LinkContainer>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="me-auto">
                    <LinkContainer to={"/category/guitars"}>
                        <Nav.Link className="navlink" >Guitarras</Nav.Link>
                    </LinkContainer>
                    <LinkContainer to={"/category/basses"}>
                        <Nav.Link className="navlink" href="">Bajos</Nav.Link>
                    </LinkContainer>
                    <LinkContainer to={"/category/drums"}>
                        <Nav.Link className="navlink" href="/drums">Baterías</Nav.Link>
                    </LinkContainer>
                    <LinkContainer to={"/category/amps"}>
                        <Nav.Link className="navlink" href="/amps">Amplificadores</Nav.Link>
                    </LinkContainer>
                    <LinkContainer to={"/category/effects"}>
                        <Nav.Link className="navlink" href="/effects">Efectos</Nav.Link>
                    </LinkContainer>
                </Nav>
                <Nav className="nav-right">
                <LinkContainer to={"/cart"}>
                    <Nav.Link className="navlink" href="/cart"><CartWidget /></Nav.Link>
                </LinkContainer>    
                </Nav>
                </Navbar.Collapse>
            </Container>
            </Navbar>
    )
};

export {NavBar};