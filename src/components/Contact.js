import React, { useState } from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import '../styles/Contact.scss';

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you can add your email sending logic
    console.log('Form submitted:', formData);
    setSubmitted(true);
    // Reset form after 2 seconds
    setTimeout(() => {
      setFormData({ name: '', email: '', subject: '', message: '' });
      setSubmitted(false);
    }, 2000);
  };

  return (
    <div className="contact-page">
      <Container>
        <div className="contact-header">
          <h1>Contact Us</h1>
          <p>We'd love to hear from you. Get in touch with us today!</p>
        </div>

        <Row className="contact-content">
          {/* Contact Information */}
          <Col lg={5} md={6} sm={12} className="contact-info-col">
            <div className="contact-info">
              <div className="info-item">
                <div className="info-icon">
                  <i className="fas fa-map-marker-alt"></i>
                </div>
                <div className="info-text">
                  <h4>Address</h4>
                  <p>123 Cinema Street<br />Movie City, MC 12345</p>
                </div>
              </div>

              <div className="info-item">
                <div className="info-icon">
                  <i className="fas fa-phone"></i>
                </div>
                <div className="info-text">
                  <h4>Phone</h4>
                  <p>+1 (555) 123-4567</p>
                </div>
              </div>

              <div className="info-item">
                <div className="info-icon">
                  <i className="fas fa-envelope"></i>
                </div>
                <div className="info-text">
                  <h4>Email</h4>
                  <p>support@cinemate.com</p>
                </div>
              </div>

              <div className="info-item">
                <div className="info-icon">
                  <i className="fas fa-clock"></i>
                </div>
                <div className="info-text">
                  <h4>Business Hours</h4>
                  <p>Monday - Friday: 9AM - 8PM<br />Saturday - Sunday: 10AM - 10PM</p>
                </div>
              </div>

              {/* Social Links */}
              <div className="social-links">
                <h4>Follow Us</h4>
                <div className="social-icons">
                  <a href="#facebook" className="social-icon">
                    <i className="fab fa-facebook-f"></i>
                  </a>
                  <a href="#twitter" className="social-icon">
                    <i className="fab fa-twitter"></i>
                  </a>
                  <a href="#instagram" className="social-icon">
                    <i className="fab fa-instagram"></i>
                  </a>
                  <a href="#youtube" className="social-icon">
                    <i className="fab fa-youtube"></i>
                  </a>
                </div>
              </div>
            </div>
          </Col>

          {/* Contact Form */}
          <Col lg={7} md={6} sm={12} className="contact-form-col">
            <div className="contact-form-wrapper">
              {submitted ? (
                <div className="success-message">
                  <i className="fas fa-check-circle"></i>
                  <h3>Thank You!</h3>
                  <p>Your message has been sent successfully. We'll get back to you soon!</p>
                </div>
              ) : (
                <Form onSubmit={handleSubmit} className="contact-form">
                  <Form.Group className="mb-3">
                    <Form.Label>Name</Form.Label>
                    <Form.Control
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Your Name"
                      required
                      className="form-input"
                    />
                  </Form.Group>

                  <Form.Group className="mb-3">
                    <Form.Label>Email</Form.Label>
                    <Form.Control
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="your@email.com"
                      required
                      className="form-input"
                    />
                  </Form.Group>

                  <Form.Group className="mb-3">
                    <Form.Label>Subject</Form.Label>
                    <Form.Control
                      type="text"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      placeholder="Message Subject"
                      required
                      className="form-input"
                    />
                  </Form.Group>

                  <Form.Group className="mb-3">
                    <Form.Label>Message</Form.Label>
                    <Form.Control
                      as="textarea"
                      rows={6}
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Your Message"
                      required
                      className="form-input"
                    />
                  </Form.Group>

                  <Button type="submit" className="submit-btn">
                    <i className="fas fa-paper-plane"></i> Send Message
                  </Button>
                </Form>
              )}
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Contact;
