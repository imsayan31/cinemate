import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import '../styles/Footer.scss';

function Footer() {
  return (
    <footer className="footer-custom">
      <Container>
        <Row className="footer-content">
          <Col md={6} className="copyright">
            <p>&copy; 2026 CineMate. All rights reserved.</p>
          </Col>
          <Col md={6} className="social-icons">
            <a href="#facebook" className="social-link">
              <i className="fab fa-facebook-f"></i>
            </a>
            <a href="#twitter" className="social-link">
              <i className="fab fa-twitter"></i>
            </a>
            <a href="#instagram" className="social-link">
              <i className="fab fa-instagram"></i>
            </a>
            <a href="#linkedin" className="social-link">
              <i className="fab fa-linkedin-in"></i>
            </a>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}

export default Footer;
