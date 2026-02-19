import { Col, Card, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
function MovieGridView({movies}) {
    return (
        <>
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
        </>
    )
}

export default MovieGridView;