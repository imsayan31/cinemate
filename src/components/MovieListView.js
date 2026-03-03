import React, { useState } from 'react';
import { ListGroup, Button, Badge } from 'react-bootstrap';
import '../styles/MovieListing.scss';
import InfiniteScroll from 'react-infinite-scroll-component';
import Loader from './Loader';

// simple list view -- remove react-window complexity
function MovieListView({ movies = [], loading }) {
  const [movieList, setMovieList] = useState(movies.slice(0, 5)); // initial load of 20 movies
  const [hasMore, setHasMore] = useState(true);
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
      loader={ loading && <Loader /> }
      endMessage={
        <p style={{ textAlign: 'center' }}>
          <b>No more movies to show</b>
        </p>
      }
    >
      <div className="list-view">
        <ListGroup variant="flush">
          {movieList.map((movie) => (
            <ListGroup.Item key={movie?.id ?? Math.random()} className="list-item">
              <div className="list-row">
                <div className="poster-col">
                  <img
                    src={movie?.poster}
                    alt={movie?.title}
                    className="poster-image"
                  />
                </div>

                <div className="info-col">
                  <h5 className="list-title">{movie?.title}</h5>
                  <div className="list-meta">
                    <Badge bg="warning" className="genre">
                      {movie?.genre}
                    </Badge>
                    <span className="rating">⭐ {movie?.rating}</span>
                    <span className="duration">{movie?.duration}</span>
                  </div>
                  <p className="list-desc">{movie?.description}</p>
                </div>

                <div className="actions-col">
                  <div className="price">{movie?.price}</div>
                  <Button variant="outline-primary" className="btn-sm book-btn">
                    Book
                  </Button>
                  <Button variant="primary" className="btn-sm book-btn watchlist-btn">
                    Add to watchlist
                  </Button>
                </div>
              </div>
            </ListGroup.Item>
          ))}
        </ListGroup>
      </div>
    </InfiniteScroll>
  );
}

export default MovieListView;