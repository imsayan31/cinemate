import React from 'react';
import Header from './Header';
import Footer from './Footer';
import MovieListing from './MovieListing';
import '../styles/Home.scss';

function Home() {
  return (
    <div className="home-page">
      <Header />
      <main className="main-content">
        <MovieListing />
      </main>
      <Footer />
    </div>
  );
}

export default Home;
