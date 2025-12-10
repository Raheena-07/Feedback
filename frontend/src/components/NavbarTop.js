import React from "react";
import { Navbar, Container, Nav } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import "./NavbarTop.css";

export default function NavbarTop() {
  return (
    <div className="navbar-page-container">
      <Navbar expand="lg" className="navbar-custom">
        <Container>
          <Navbar.Brand>Feedback Admin</Navbar.Brand>
          <Navbar.Toggle />

          <Navbar.Collapse>
            <Nav className="ms-auto">
              <NavLink to="/dashboard" className="nav-link">
                Dashboard
              </NavLink>
              <NavLink to="/add" className="nav-link">
                Add Feedback
              </NavLink>
            </Nav>
          </Navbar.Collapse>

        </Container>
      </Navbar>
    </div>
  );
}
