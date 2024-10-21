import React from "react";
import { Link } from "react-router-dom";

export const Header = () => {
  return (
    <header>
      <div className="container">
        <div className="inner-content">
          <div className="brand">
            <Link to="/favorite">Favorite</Link>
          </div>

          <ul className="nav-links">
            <li>
              <Link to="/nowplaying">Now playing</Link>
            </li>

            <li>
              <Link to="/popularmovie">Popular Movie</Link>
            </li>

            <li>
              <Link to="/" className="btn btn-main">
                Log Out
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
};

export default Header;
