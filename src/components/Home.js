import React from 'react';
import MovieListing from './MovieListing';
import '../styles/Home.scss';

function Home() {
  return (
    <div className="home-page">
      <main className="main-content">
        <MovieListing />
      </main>
    </div>
  );
}

export default Home;
