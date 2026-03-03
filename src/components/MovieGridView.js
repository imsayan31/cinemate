import { useState, useEffect } from 'react';
import { Col, Card, Button, Row } from 'react-bootstrap';
import InfiniteScroll from 'react-infinite-scroll-component';
import { Link } from 'react-router-dom';
import Loader from './Loader';
function MovieGridView({ movies = [], loading }) {
    const [movieList, setMovieList] = useState(movies.slice(0, 4)); // initial load of 20 movies
    const [hasMore, setHasMore] = useState(true);

    // sync movieList when movies prop changes (e.g., after API fetch completes)
    useEffect(() => {
        if (movies.length > 0) {
            setMovieList(movies.slice(0, 4));
            setHasMore(true);
        }
    }, [movies.length]);
    const fetchMoreData = () => {
        if (movieList.length >= movies.length) {
            setHasMore(false);
            return;
        }
        setMovieList((prevList) => [...prevList, ...movies.slice(prevList.length, prevList.length + 5)]);
    };
    return (
        <InfiniteScroll
            dataLength={movieList.length}
            next={fetchMoreData}
            hasMore={hasMore}
            loader={loading && <Loader />}
            endMessage={
                <p style={{ textAlign: 'center' }}>
                    <b>No more movies to show</b>
                </p>
            }
        >
            <Row className="w-100 movies-grid">
                {movieList.map(movie => (
                    <Col lg={3} md={6} sm={12} key={movie.id} className="movie-col">
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
        </InfiniteScroll>
    )
}

export default MovieGridView;