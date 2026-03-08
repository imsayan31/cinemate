import React, { useContext, useEffect, useState } from 'react';
import { Container, Table, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import '../styles/Watchlist.scss';
import WatchListContext from '../context/watchlist/WatchListContext';
import { useDispatch, useSelector } from 'react-redux';
import { showSuccessMessage } from '../features/message/messageSlice';

const Watchlist = () => {
    const { watchlist, removeItemFromWatchlist, clearWatchlist } = useContext(WatchListContext);
    const [watchlistMovies, setWatchlistMovies] = useState([]);
    const dispatch = useDispatch();
    const message = useSelector(state => state);

    useEffect(() => {
        setWatchlistMovies(watchlist);
            console.log('watchlist updated:', watchlist);
            console.log('message:', message);
    }, [watchlist, message]);

  return (
    <section className="watchlist">
      <Container>
        <div className="section-header">
          <div className="header-text">
            <h2>My Watchlist</h2>
            <p>Your saved movies for later</p>
          </div>
          {watchlistMovies.length > 0 && (
            <Button
              variant="outline-danger"
              className="clear-btn"
              onClick={clearWatchlist}
            >
              Clear Watchlist
            </Button>
          )}
        </div>
        {watchlistMovies.length === 0 ? (
          <div className="empty-watchlist">
            <p>Your watchlist is empty. Start adding movies!</p>
            <Link to="/movies">
              <Button variant="primary" className="explore-btn">
                Explore Movies
              </Button>
            </Link>
          </div>
        ) : (
          <div className="watchlist-table-container">
            <Table striped bordered hover variant="dark" className="watchlist-table">
              <thead>
                <tr>
                  <th>Poster</th>
                  <th>Title</th>
                  <th>Genre</th>
                  <th>Language</th>
                  <th>Year</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {watchlistMovies.map((movie) => (
                  <tr key={movie.id}>
                    <td>
                      <img
                        src={movie.poster || '/placeholder.jpg'}
                        alt={movie.title}
                        className="table-poster"
                      />
                    </td>
                    <td className="movie-title-cell">{movie.title}</td>
                    <td>{movie.genre}</td>
                    <td>{movie.language}</td>
                    <td>{movie.year}</td>
                    <td className="actions-cell">
                      <Link to={`/movie/${movie.id}`}>
                        <Button variant="outline-primary" size="sm" className="action-btn">
                          View Details
                        </Button>
                      </Link>
                      <Button
                        variant="outline-danger"
                        size="sm"
                        className="action-btn"
                        onClick={() => removeItemFromWatchlist(movie.id)}
                      >
                        Remove
                      </Button>
                      <Button
                        variant="outline-danger"
                        size="sm"
                        className="action-btn"
                        onClick={() => dispatch(showSuccessMessage("Form submitted successfully!"))}
                      >
                        Show Message
                      </Button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </Table>
          </div>
        )}
      </Container>
    </section>
  );
};

export default Watchlist;