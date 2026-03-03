import React, { useEffect, useState } from 'react';
import { Container } from 'react-bootstrap';
import '../styles/MovieListing.scss';

import Loader from './Loader';
import MovieListView from './MovieListView';
import MovieGridView from './MovieGridView';

function MovieListing() {
    const [movies, setMovies] = useState([]);
    const [viewMode, setViewMode] = useState('grid'); // 'grid' or 'list'
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        // Simulate fetching data from an API
        async function fetchMovies() {
            setLoading(true);
            try {
              const response = await fetch('https://fooapi.com/api/movies'); // Replace with your actual API endpoint
              const responseJson = await response.json();
              // always store array, avoid null/undefined
              setMovies(Array.isArray(responseJson.data) ? responseJson.data : []);
            } catch (err) {
              console.error('movie fetch failed', err);
              setMovies([]);
            } finally {
              setLoading(false);
            }
        };
        fetchMovies();
    }, []);

  return (
    <section className="movie-listing">
      {loading && <Loader />}
      <Container>
        <div className="section-header">
          <h2>Now Showing</h2>
          <p>Book your tickets for the latest blockbuster movies</p>
        </div>
        <section className="movies-filter-section" aria-label="View toggle">
            <button
              className={`view-toggle-btn ${viewMode === 'grid' ? 'active' : ''}`}
              aria-pressed={viewMode === 'grid'}
              title="Grid view"
              onClick={() => setViewMode('grid')}
            >
              <i className="bi-grid-fill" aria-hidden="true"></i>
              <span className="sr-only">Grid view</span>
            </button>
            <button
              className={`view-toggle-btn ${viewMode === 'list' ? 'active' : ''}`}
              aria-pressed={viewMode === 'list'}
              title="List view"
              onClick={() => setViewMode('list')}
            >
              <i className="bi-list-ul" aria-hidden="true"></i>
              <span className="sr-only">List view</span>
            </button>
        </section>
        {viewMode === 'list' ? (
          <div className="movies-list-container">
            <MovieListView movies={movies} loading={loading} />
          </div>
        ) : (
          <MovieGridView movies={movies} loading={loading} />
        )}
      </Container>
    </section>
  );
}

export default MovieListing;
