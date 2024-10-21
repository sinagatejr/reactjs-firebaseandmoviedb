import React, { useEffect, useState } from "react";
import { ResultCard } from "../components/ResultCard";
import {API_KEY} from '../constants/App';
import  Header  from "../components/Header";

export const PopularMovie = () => {
  const [results, setResults] = useState([]);
  const [visible] = useState(6);

  useEffect(() => {
    fetch(`https://api.themoviedb.org/3/movie/now_playing?api_key=${API_KEY}`)
    .then((res) => res.json())
    .then((data) => {
      if (!data.errors) {
        setResults(data.results);
      } else {
        setResults([]);
      }})
  },[]);

  return (
    <div>
    <Header />   
    <div className="add-page">
      <div className="container">
        <div className="add-content">
        <h1 className="heading">Popular Movie</h1>
            <ul className="results">
            {results.slice(0, visible).map((movie, index) => (
                <li key={movie.id}>
                  <ResultCard movie={movie} />
                </li>

              ))}

            </ul>
        </div>
      </div>
    </div>
    </div>
  );
};
