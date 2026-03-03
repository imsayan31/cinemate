import React, { useState } from 'react';
import { Navbar, Nav, Container, Button } from 'react-bootstrap';
import '../styles/Header.scss';
import { NavLink } from 'react-router-dom';
import CommonModal from './CommonModal';

function Header() {
  const [showLoginForm, setShowLoginForm] = useState(false);
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
            <NavLink to="/" className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}>Home</NavLink>
            <NavLink to="/movies" className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}>Movies</NavLink>
            <NavLink to="/contact" className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}>Contact</NavLink>
            <Button className="user-btn" onClick={() => setShowLoginForm(true)}>
              <i className="fas fa-user"></i>
            </Button>
          </Nav>
        </Navbar.Collapse>
        <CommonModal
          show={showLoginForm}
          onHide={() => setShowLoginForm(false)}
          title="Sign In"
        >
          <p>Please sign in to your account.</p>
        </CommonModal>
      </Container>
    </Navbar>
  );
}

export default Header;
