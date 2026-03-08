import React, { useContext } from 'react';
/* import MovieListing from './MovieListing'; */
import '../styles/Home.scss';
import ThemeContext from '../context/ThemeContext';
import ToDo from './ToDo';

function Home() {
  const {theme} = useContext(ThemeContext);
  return (
    <div className={theme === 'dark' ? 'home-page' : 'home-page-light'}>
      <main className="main-content">
        <ToDo />
        {/* <MovieListing /> */}
      </main>
    </div>
  );
}

export default Home;
