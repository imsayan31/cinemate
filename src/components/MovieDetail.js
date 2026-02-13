import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Container, Row, Col, Button } from 'react-bootstrap';
import '../styles/MovieDetail.scss';
import useFormatDate from '../hooks/useFormatDate';

function MovieDetail() {
  const { id } = useParams();
  const [movieDetail, setMovieDetail] = useState(null);

  useEffect(() => {
    // Fetch movie details using the id from the URL
    // For now, we will use dummy data
    async function fetchMovieDetails() {
      // Simulate API call to fetch movie details
      // Replace with actual API endpoint and logic
      const responseDetails = await fetch(`https://fooapi.com/api/movies/${id}`);
      const responseJsonDetails = await responseDetails.json();
      console.log(`Fetching details for movie ID:`, responseJsonDetails.data); // Log the fetched movie ID
      setMovieDetail(responseJsonDetails.data);
    }
    fetchMovieDetails();
  }, [id]);

  const formatDate = useFormatDate();

  // Dummy movie data - Replace with dynamic data later
  const movie = {
    id: id,
    title: 'The Quantum Paradox',
    genre: 'Sci-Fi',
    rating: 8.5,
    releaseDate: 'March 15, 2026',
    duration: '148 minutes',
    director: 'John Director',
    cast: 'Actor One, Actor Two, Actor Three',
    description: 'An epic journey through time and space exploring the mysteries of quantum mechanics and parallel universes. A mind-bending adventure that will challenge everything you know about reality.',
    storyline: 'When a physicist discovers a way to access parallel universes, she must navigate through different realities to save her own world from collapse. With the help of unlikely allies, she races against time to find the solution before it\'s too late.',
    language: 'English',
    certification: 'PG-13',
    image: '🎬',
    reviews: [
      { user: 'John Doe', rating: 8, comment: 'Amazing movie! Highly recommended.' },
      { user: 'Jane Smith', rating: 9, comment: 'One of the best sci-fi movies I\'ve seen.' },
      { user: 'Mike Johnson', rating: 8, comment: 'Great cinematography and storytelling.' }
    ],
    showtimes: ['10:00 AM', '1:30 PM', '4:45 PM', '7:30 PM', '10:15 PM'],
    price: '$12.99',
    availableSeats: 45
  };

  return (
    <div className="movie-detail-page">
      {/* Hero Section */}
      <div className="movie-hero">
        <Container>
          <Row className="hero-content">
            <Col lg={4} md={6} sm={12} className="movie-poster-col">
              <div className="movie-poster">
                <div className="poster-image">
                    <img src={movieDetail?.poster || movie.image} alt={movieDetail?.title} className="poster-image" />
                </div>
              </div>
            </Col>

            <Col lg={8} md={6} sm={12} className="movie-info-col">
              <div className="movie-info">
                <h1 className="movie-title">{movieDetail?.title} ({movieDetail?.year})</h1>
                
                <div className="movie-meta">
                  <span className="genre-badge">{movieDetail?.genre}</span>
                  <span className="rating-badge">⭐ {movieDetail?.imdbRating || movie.rating}/10</span>
                  <span className="certification">{movieDetail?.awards}</span>
                </div>

                <div className="movie-details">
                  <div className="detail-item">
                    <span className="label">Release Date:</span>
                    <span className="value">{formatDate(movieDetail?.released || movie.releaseDate)}</span>
                  </div>
                  <div className="detail-item">
                    <span className="label">Duration:</span>
                    <span className="value">{movieDetail?.runtime}</span>
                  </div>
                  <div className="detail-item">
                    <span className="label">Writer:</span>
                    <span className="value">{movieDetail?.writer}</span>
                  </div>
                  <div className="detail-item">
                    <span className="label">Director:</span>
                    <span className="value">{movieDetail?.director}</span>
                  </div>
                  <div className="detail-item">
                    <span className="label">Language:</span>
                    <span className="value">{movieDetail?.language}</span>
                  </div>
                </div>

                <div className="movie-description">
                  <p>{movieDetail?.plot}</p>
                </div>

                <div className="action-buttons">
                  <Button className="book-ticket-btn">
                    <i className="fas fa-ticket-alt"></i> Book Tickets
                  </Button>
                  <Button className="add-watchlist-btn">
                    <i className="fas fa-heart"></i> Add to Wishlist
                  </Button>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </div>

      {/* Main Content */}
      <Container>
        <Row className="detail-sections">
          {/* Storyline Section */}
          <Col lg={8} md={12} sm={12}>
            <div className="storyline-section">
              <h2>Storyline</h2>
              <p>{movieDetail?.plot}</p>
            </div>

            {/* Cast Section */}
            <div className="cast-section">
              <h2>Cast</h2>
              <p>{movieDetail?.actors}</p>
            </div>

            {/* Reviews Section */}
            <div className="reviews-section">
              <h2>Audience Reviews</h2>
              <div className="reviews-list">
                {movie.reviews.map((review, index) => (
                  <div key={index} className="review-item">
                    <div className="review-header">
                      <span className="reviewer-name">{review.user}</span>
                      <span className="review-rating">⭐ {review.rating}/10</span>
                    </div>
                    <p className="review-comment">{review.comment}</p>
                  </div>
                ))}
              </div>
            </div>
          </Col>

          {/* Booking Section */}
          <Col lg={4} md={12} sm={12}>
            <div className="booking-section">
              <h3>Select Showtime</h3>
              <div className="showtimes-grid">
                {movie.showtimes.map((time, index) => (
                  <Button key={index} className="showtime-btn">
                    {time}
                  </Button>
                ))}
              </div>

              <div className="booking-info">
                <div className="info-row">
                  <span>Available Seats:</span>
                  <span className="highlight">{movie.availableSeats}</span>
                </div>
                <div className="info-row">
                  <span>Price per Ticket:</span>
                  <span className="highlight">{movie.price}</span>
                </div>
              </div>

              <Button className="proceed-btn">
                Proceed to Booking
              </Button>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default MovieDetail;