import React from "react";

import { Navbar, Nav, Container } from "react-bootstrap";

import { FaShoppingCart, FaUser } from "react-icons/fa";
import { LinkContainer } from "react-router-bootstrap";

import logo from "../assets/logo.png";

const Header = () => {
  return (
    <header>
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Container>
          <LinkContainer to="/">
            <Navbar.Brand>
              <img src={logo} alt="suuradda calaamadda" />
              ProShop
            </Navbar.Brand>
          </LinkContainer>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <LinkContainer to="/cart">
                <Nav.Link>
                  {" "}
                  <FaShoppingCart /> Cart{" "}
                </Nav.Link>
              </LinkContainer>

              <LinkContainer to="/login">
                <Nav.Link>
                  {" "}
                  <FaUser /> Sign In{" "}
                </Nav.Link>
              </LinkContainer>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
};

export default Header;
