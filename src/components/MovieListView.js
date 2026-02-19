import React from 'react';
import { ListGroup, Button, Badge } from 'react-bootstrap';
import '../styles/MovieListing.scss';

function MovieListView({ movies = [] }) {
  return (
    <div className="list-view">
      <ListGroup variant="flush">
        {movies.slice(0, 4).map((movie) => (
          <ListGroup.Item key={movie.id} className="list-item">
            <div className="list-row">
              <div className="poster-col">
                <img src={movie.poster} alt={movie.title} className="poster-image" />
              </div>

              <div className="info-col">
                <h5 className="list-title">{movie.title}</h5>
                <div className="list-meta">
                  <Badge bg="warning" className="genre">{movie.genre}</Badge>
                  <span className="rating">⭐ {movie.rating}</span>
                  <span className="duration">{movie.duration}</span>
                </div>
                <p className="list-desc">{movie.description}</p>
              </div>

              <div className="actions-col">
                <div className="price">{movie.price}</div>
                <Button variant="outline-primary" className="btn-sm book-btn">Book</Button>
              </div>
            </div>
          </ListGroup.Item>
        ))}
      </ListGroup>
    </div>
  );
}

export default MovieListView;