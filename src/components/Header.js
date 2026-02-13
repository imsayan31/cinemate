import React from 'react';
import { Navbar, Nav, Container, Button } from 'react-bootstrap';
import '../styles/Header.scss';

function Header() {
  return (
    <Navbar bg="dark" expand="lg" sticky="top" className="navbar-custom">
      <Container className="navbar-container">
        <Navbar.Brand href="#" className="brand">
          <span className="logo-icon">🎬</span>
          <span className="logo-text">CineMate</span>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
          <Nav className="nav-menu">
            <Nav.Link href="#home" className="nav-link">Home</Nav.Link>
            <Nav.Link href="#movies" className="nav-link">Movies</Nav.Link>
            <Nav.Link href="#contact" className="nav-link">Contact</Nav.Link>
            <Button className="user-btn" href="#signin">
              <i className="fas fa-user"></i>
            </Button>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;
