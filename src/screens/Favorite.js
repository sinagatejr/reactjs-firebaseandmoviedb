import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";
import { MovieCard } from "../components/MovieCard";

import  Header  from "../components/Header";

export const Favorite= () => {
  const { favorite } = useContext(GlobalContext);

return (
<div>
<Header />   
<div className="add-page">
  <div className="container">
    <div className="add-content">
      <h1 className="heading">Popular Movie</h1>
        <ul className="results">
          {favorite.map((movie) => (
            <li key={movie.id}>
              <MovieCard movie={movie} key={movie.id} type="favorite" />
            </li>
          ))}
        </ul>
    </div>
  </div>
</div>
</div>
  );
};
