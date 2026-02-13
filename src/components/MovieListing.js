import React from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import '../styles/MovieListing.scss';

function MovieListing() {
  const movies = [
    {
      id: 1,
      title: 'The Quantum Paradox',
      genre: 'Sci-Fi',
      rating: '8.5/10',
      price: '$12.99',
      image: '🎬',
      description: 'An epic journey through time and space.'
    },
    {
      id: 2,
      title: 'Love in Paris',
      genre: 'Romance',
      rating: '7.8/10',
      price: '$10.99',
      image: '💕',
      description: 'A romantic tale set in the City of Light.'
    },
    {
      id: 3,
      title: 'The Last Adventure',
      genre: 'Action',
      rating: '8.2/10',
      price: '$13.99',
      image: '⚡',
      description: 'High-octane action and thrilling sequences.'
    },
    {
      id: 4,
      title: 'Mystery Manor',
      genre: 'Thriller',
      rating: '8.0/10',
      price: '$11.99',
      image: '🔍',
      description: 'A gripping mystery that will keep you on edge.'
    },
    {
      id: 5,
      title: 'Space Odyssey',
      genre: 'Sci-Fi',
      rating: '8.7/10',
      price: '$12.99',
      image: '🚀',
      description: 'Explore the wonders of the universe.'
    },
    {
      id: 6,
      title: 'Comedy Gold',
      genre: 'Comedy',
      rating: '7.5/10',
      price: '$9.99',
      image: '😂',
      description: 'Laugh out loud with this hilarious comedy.'
    }
  ];

  return (
    <section className="movie-listing">
      <Container>
        <div className="section-header">
          <h2>Now Showing</h2>
          <p>Book your tickets for the latest blockbuster movies</p>
        </div>
        <Row className="movies-grid">
          {movies.map(movie => (
            <Col lg={4} md={6} sm={12} key={movie.id} className="movie-col">
              <Card className="movie-card">
                <Card.Body>
                  <div className="movie-image">{movie.image}</div>
                  <Card.Title>{movie.title}</Card.Title>
                  <div className="movie-meta">
                    <span className="genre">{movie.genre}</span>
                    <span className="rating">⭐ {movie.rating}</span>
                  </div>
                  <Card.Text className="description">{movie.description}</Card.Text>
                  <div className="movie-footer">
                    <span className="price">{movie.price}</span>
                    <Button variant="primary" className="book-btn">Book Now</Button>
                  </div>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
}

export default MovieListing;
