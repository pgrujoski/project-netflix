import React, { useRef } from 'react';
import './Row.css';

function Row({ title, movies }) {
  const rowRef = useRef(null);

  const scroll = (direction) => {
    const { current } = rowRef;
    if (direction === 'left') {
      current.scrollLeft -= current.clientWidth;
    } else {
      current.scrollLeft += current.clientWidth;
    }
  };

  return (
    <div className="row">
      <h2>{title}</h2>
      <div className="row__container" ref={rowRef}>
        {movies.map((movie) => (
          <img
            key={movie.id}
            className="row__poster"
            src={`https://image.tmdb.org/t/p/original${movie.poster_path}`}
            alt={movie.title}
          />
        ))}
      </div>
      <div className="row__arrows">
        <button className="row__arrow row__arrow--left" onClick={() => scroll('left')}>
          &#10094;
        </button>
        <button className="row__arrow row__arrow--right" onClick={() => scroll('right')}>
          &#10095;
        </button>
      </div>
    </div>
  );
}

export default Row;
