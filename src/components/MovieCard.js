import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";

export const MovieCard = ({ movie, type }) => {
  const {
    removeMovieFromFavorite,
  } = useContext(GlobalContext);

  return (
<div className="result-card">
  
      <div className="poster-wrapper">
        {movie.poster_path ? (
          <img
            src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`}
            alt={`${movie.title} Poster`}
          />
        ) : (
          <div className="filler-poster" />
        )}
      </div>

      <div className="info">
        <div className="header">
          <h3 className="title">{movie.title}</h3>
          <h4 className="release-date">
            {movie.release_date}
          </h4>
        </div>

        <div className="controls">
          <button
            className="btn"
            onClick={() => removeMovieFromFavorite(movie.id)}
          >
            Remove
          </button>

        </div>
      </div>
    </div>
  );
};

