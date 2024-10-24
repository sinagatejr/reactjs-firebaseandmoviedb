import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";

export const ResultCard = ({ movie }) => {
  const {
    addMovieToFavorite,
    favorite,
  } = useContext(GlobalContext);

  let storedFavorite = favorite.find((o) => o.id === movie.id);

  const favoriteDisabled = storedFavorite? true : false;

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
            disabled={favoriteDisabled}
            onClick={() => addMovieToFavorite(movie)}
          >
            Add to Favorite
          </button>

        </div>
      </div>
    </div>
  );
};
