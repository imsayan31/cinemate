import React, { useEffect, useState } from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import '../styles/MovieListing.scss';
import { Link } from 'react-router-dom';

function MovieListing() {
    const [movies, setMovies] = useState([]);

    useEffect(() => {
        // Simulate fetching data from an API
        async function fetchMovies() {
            const response = await fetch('https://fooapi.com/api/movies'); // Replace with your actual API endpoint
            const responseJson = await response.json();
            setMovies(responseJson.data);    
        };
        fetchMovies();
    }, []);

  return (
    <section className="movie-listing">
      <Container>
        <div className="section-header">
          <h2>Now Showing</h2>
          <p>Book your tickets for the latest blockbuster movies</p>
        </div>
        <section className="movies-filter-section">
            
        </section>
        <Row className="movies-grid">
          {movies.slice(0, 4).map(movie => (
            <Col lg={4} md={6} sm={12} key={movie.id} className="movie-col">
              <Link to={`/movie/${movie.id}`} className="movie-link">
                <Card className="movie-card">
                    <Card.Body>
                    <div className="movie-image">
                        <img src={movie.poster} alt={movie.title} className="poster-image" />
                        </div>
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
              </Link>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
}

export default MovieListing;
