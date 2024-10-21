import React, { useState, useEffect } from "react";
import { ResultCard } from "../components/ResultCard";
import {API_KEY} from '../constants/App';
import  Header  from "../components/Header";

export const NowPlaying = () => {
  const [results, setResults] = useState([]);
  const [visible, setVisible] = useState(6);

  const showMoreItems = () => {
    if (visible<=30){
    setVisible((prevValue) => prevValue +6 );
    }
    else{
    setVisible((prevValue) => prevValue +0 );
    }
  }

  useEffect(() => {
    fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&language=en-US&page=1`)
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
        <h1 className="heading">Now Playing</h1>
         <ul className="results">
            {results.slice(0, visible).map((movie, index ) => (
                <li key={movie.id}>
                  <ResultCard movie={movie} />
                </li>
              ))}
              <button className="btn" onClick={showMoreItems}>Load More</button>
            </ul>
        </div>
      </div>
    </div>
    </div>
  );
};
