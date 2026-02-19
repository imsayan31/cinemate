import React, { useEffect, useState } from 'react';
import { Container, Row } from 'react-bootstrap';
import '../styles/MovieListing.scss';

import MovieListView from './MovieListView';
import MovieGridView from './MovieGridView';

function MovieListing() {
    const [movies, setMovies] = useState([]);
    const [viewMode, setViewMode] = useState('grid'); // 'grid' or 'list'

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
        <section className="movies-filter-section" aria-label="View toggle">
            <button
              className={`view-toggle-btn ${viewMode === 'list' ? 'active' : ''}`}
              aria-pressed={viewMode === 'list'}
              title="List view"
              onClick={() => setViewMode('list')}
            >
              <i className="bi-list-ul" aria-hidden="true"></i>
              <span className="sr-only">List view</span>
            </button>

            <button
              className={`view-toggle-btn ${viewMode === 'grid' ? 'active' : ''}`}
              aria-pressed={viewMode === 'grid'}
              title="Grid view"
              onClick={() => setViewMode('grid')}
            >
              <i className="bi-grid-fill" aria-hidden="true"></i>
              <span className="sr-only">Grid view</span>
            </button>
        </section>
        {viewMode === 'list' ? (
          <div className="movies-list-container">
            <MovieListView movies={movies} />
          </div>
        ) : (
          <Row className="movies-grid">
            <MovieGridView movies={movies} />
          </Row>
        )}
      </Container>
    </section>
  );
}

export default MovieListing;
