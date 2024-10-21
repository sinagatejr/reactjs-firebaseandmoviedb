import './App.css';
import SignIn from './screens/signin';
import SignUp from './screens/signup';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import React from 'react';

import { Favorite } from "./screens/Favorite";
import { PopularMovie } from "./screens/PopularMovie";
import { NowPlaying } from "./screens/NowPlaying";
import "./lib/font-awesome/css/all.min.css";

import { GlobalProvider } from "./context/GlobalState";

function App() {

  return (
    <GlobalProvider>
    <Router>
      <Routes>
        <Route path="/" element={<SignIn ></SignIn>}></Route>
        <Route path="/signup" element={<SignUp ></SignUp>}></Route>
        <Route exact path="/favorite" element={<Favorite />}></Route>
        <Route exact path="/nowplaying" element={<NowPlaying />}> </Route>
        <Route exact path="/popularmovie"element={<PopularMovie />}></Route>
      </Routes>
    </Router>
    </GlobalProvider>
  );
}

export default App;
