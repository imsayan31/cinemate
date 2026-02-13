import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import '../styles/NotFound.scss';

function NotFound() {
  const navigate = useNavigate();

  return (
    <div className="notfound-container">
      <Container>
        <Row className="notfound-content">
          <Col lg={8} md={10} sm={12} className="notfound-column">
            <div className="notfound-box">
              <h1 className="error-code">404</h1>
              <h2 className="error-title">Page Not Found</h2>
              <p className="error-description">
                Oops! The page you're looking for doesn't exist. It might have been removed or the URL might be incorrect.
              </p>
              <div className="error-icon">🎬</div>
              <div className="button-group">
                <Button 
                  className="btn-home" 
                  onClick={() => navigate('/')}
                >
                  <i className="fas fa-home"></i> Go to Home
                </Button>
                <Button 
                  className="btn-movies" 
                  onClick={() => navigate('/movies')}
                >
                  <i className="fas fa-film"></i> Browse Movies
                </Button>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default NotFound;
