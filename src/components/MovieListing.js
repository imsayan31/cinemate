import React, { useCallback, useEffect, useMemo, useState } from 'react';
import { Container } from 'react-bootstrap';
import '../styles/MovieListing.scss';

import Loader from './Loader';
import MovieListView from './MovieListView';
import MovieGridView from './MovieGridView';
import Filter from './filters/Filter';
import useFetchFilterElements from '../hooks/useFetchFilterElements';

const checkMovies = [
    { id: 1, title: "Inception" },
    { id: 2, title: "Interstellar" },
  ];

const MovieCheckList = React.memo(({ movies, onSelect }) => {
  console.log("🎬 MovieCheckList re-rendered");
  return (
    <ul>
      {movies.map((movie) => (
        <li key={movie.id} onClick={() => onSelect(movie)}>
          {movie.title}
        </li>
      ))}
    </ul>
  );
});


function MovieListing() {
    const [movies, setMovies] = useState([]);
    const [viewMode, setViewMode] = useState('grid'); // 'grid' or 'list'
    const [loading, setLoading] = useState(false);
    const [searchTerm, setSearchTerm] = useState('');
    const [filterGenre, setFilterGenre] = useState('');
    const [filterLanguage, setFilterLanguage] = useState('');
    const { genres, languages } = useFetchFilterElements(movies);

    const [count, setCount] = useState(0);


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

    const filteredMovies = useMemo(() => {
        // if (!searchTerm) return movies;
        return movies.filter(movie => {
          if(!searchTerm && !filterGenre.target?.value && !filterLanguage.target?.value) {
            return true; // no filters applied, include all movies
          }
          const textSearch = movie.title.toLowerCase().includes(searchTerm.toLowerCase())
          const genreSearch = filterGenre.target?.value ? movie.genre === filterGenre.target?.value : true;
          const languageSearch = filterLanguage.target?.value ? movie.language === filterLanguage.target?.value : true;
          return textSearch && genreSearch && languageSearch;
        });
    }, [movies, searchTerm, filterGenre, filterLanguage]);

    

  const handleSelect = (movie) => {
    console.log("Selected:", movie.title);
  };

  /* const handleSelect = useCallback((movie) => {
    console.log("Selected:", movie.title);
  }, []); */

  console.log("🔄 Parent re-rendered");




  return (
    <section className="movie-listing">
      {loading && <Loader />}
      <Container>
        <div className="section-header">
          <h2>Now Showing</h2>
          <p>Book your tickets for the latest blockbuster movies</p>
        </div>
        <button onClick={() => setCount(count + 1)}>Increment: {count}</button>

        <MovieCheckList movies={checkMovies} onSelect={handleSelect} />

        <section className="filters-section">
          <Filter 
            searchTerm={searchTerm} 
            setSearchTerm={setSearchTerm} 
            genre={filterGenre.target?.value} 
            setGenre={setFilterGenre} 
            language={filterLanguage.target?.value} 
            setLanguage={setFilterLanguage}
            genres={genres}
            languages={languages} />
        </section>
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
            <MovieListView movies={filteredMovies} loading={loading} />
          </div>
        ) : (
          <MovieGridView movies={filteredMovies} loading={loading} />
        )}
      </Container>
    </section>
  );
}

export default MovieListing;
