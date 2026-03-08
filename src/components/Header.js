import React, { useContext, useEffect, useState } from 'react';
import { Navbar, Nav, Container, Button, Badge, Form } from 'react-bootstrap';
import '../styles/Header.scss';
import { NavLink } from 'react-router-dom';
import CommonModal from './CommonModal';
import LoginForm from './LogInForm';
import ThemeContext from '../context/ThemeContext';
import LanguageContext from '../context/LanguageContext';
import WatchListContext from '../context/watchlist/WatchListContext';
import useFormatLanguage from '../hooks/useFormatLanguage';
import { useDispatch, useSelector } from 'react-redux';
import { logOut } from '../features/auth/authSlice';

function Header() {
  const [showLoginForm, setShowLoginForm] = useState(false);
  const { theme, toggleTheme } = useContext(ThemeContext);
  const {language, selectLanguage} = useContext(LanguageContext);
  const { watchlist } = useContext(WatchListContext);
  const authData = useSelector(state => state.auth);
  const authDispatch = useDispatch();
  console.log(`authData`, authData);

  useEffect(() => {
    authData.isAuthenticated ? setShowLoginForm(false) : setShowLoginForm(false);
  }, [authData]);

  return (
    <Navbar bg={theme === 'dark' ? 'dark' : 'light'} expand="lg" sticky="top" className={ theme === 'dark' ? 'navbar-custom' : 'navbar-custom-light' }>
      <Container className="navbar-container">
        <Navbar.Brand href="#" className="brand">
          <span className="logo-icon">🎬</span>
          <span className="logo-text">CineMate</span>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
          <Nav className="nav-menu">
            <NavLink to="/" className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}>{useFormatLanguage('Home')}</NavLink>
            <NavLink to="/movies" className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}>{useFormatLanguage('Movies')}</NavLink>
            <NavLink to="/contact" className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}>{useFormatLanguage('Contact')}</NavLink>
            <NavLink to="/watchlist" className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}>{useFormatLanguage('Watchlist')}</NavLink>
            <Button className="watchlist-btn" as={NavLink} to="/watchlist">
              <i className="fas fa-heart"></i>
              {watchlist.length > 0 && (
                <Badge bg="danger" className="watchlist-badge">{watchlist.length}</Badge>
              )}
            </Button>
            {
              authData.isAuthenticated ? 
              <Button className="user-btn" onClick={() => authDispatch(logOut())}>
                Logout - {authData.user?.name ?? 'User'}
              </Button>
              : 
              <Button className="user-btn" onClick={() => setShowLoginForm(true)}>
                <i className="fas fa-user"></i>
              </Button>                   
            }
            
          </Nav>
        </Navbar.Collapse>
        <Button className="theme-toggle-btn" onClick={toggleTheme}>
          {theme === "light" ? "Switch to Dark Theme" : "Switch to Light Theme"}
        </Button>
        <Form.Select id='language-select' defaultValue={language} value={language} onChange={(e) => selectLanguage(e.target.value)}>
          <option value="">-- Select Language --</option>
          <option value="english" selected={language === 'english'}>English</option>
          <option value="french" selected={language === 'french'}>French</option>
          <option value="spanish" selected={language === 'spanish'}>Spanish</option>
        </Form.Select>
        <CommonModal
          show={showLoginForm}
          onHide={() => setShowLoginForm(false)}
          title="Sign In"
        >
          {/* theme can be passed in from higher context or state; dark is default movie style */}
          <LoginForm theme="dark" hideForm={setShowLoginForm}/>
        </CommonModal>
      </Container>
    </Navbar>
  );
}

export default Header;
