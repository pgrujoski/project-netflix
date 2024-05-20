import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Banner from './components/Banner';
import Row from './components/Row';
import './App.css';

function App() {
  const [bannerMovie, setBannerMovie] = useState(null);
  const [popularMovies, setPopularMovies] = useState([]);
  const [topRatedMovies, setTopRatedMovies] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: `Bearer ${import.meta.env.VITE_API_KEY}`,
    },
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const bannerResponse = await fetch(
          'https://api.themoviedb.org/3/movie/popular?language=en-US&page=1',
          options
        );
        const bannerData = await bannerResponse.json();
        if (bannerData.results && bannerData.results.length > 0) {
          setBannerMovie(bannerData.results[0]);
        } else {
          throw new Error('Failed to fetch banner movie');
        }

        const popularResponse = await fetch(
          'https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc',
          options
        );
        const popularData = await popularResponse.json();
        if (popularData.results) {
          setPopularMovies(popularData.results);
        } else {
          throw new Error('Failed to fetch popular movies');
        }

        const topRatedResponse = await fetch(
          'https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1',
          options
        );
        const topRatedData = await topRatedResponse.json();
        if (topRatedData.results) {
          setTopRatedMovies(topRatedData.results);
        } else {
          throw new Error('Failed to fetch top-rated movies');
        }

        setLoading(false);
      } catch (error) {
        setError(error);
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <div className="app">
      <Navbar />
      {bannerMovie && <Banner movie={bannerMovie} />}
      <Row title="Popular Movies" movies={popularMovies} />
      <Row title="Top Rated Movies" movies={topRatedMovies} />
    </div>
  );
}

export default App;
