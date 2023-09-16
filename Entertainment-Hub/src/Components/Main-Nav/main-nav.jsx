import "./main-nav.css";

import { NavLink } from "react-router-dom";

export default function SimpleNavigation() {
  return (
    <div className="nav-bar">
      <NavLink
        to="/trending"
        style={({ isActive, isPending }) => {
          return {
            fontWeight: isActive ? "bold" : "",
            color: isPending ? "red" : "white",
          };
        }}
        className="trending-bar"
      >
        TRENDING
      </NavLink>
      <NavLink
        to="/movies"
        style={({ isActive, isPending }) => {
          return {
            fontWeight: isActive ? "bold" : "",
            color: isPending ? "red" : "white",
          };
        }}
        className="movies-bar"
      >
        MOVIES
      </NavLink>
      <NavLink
        to="/series"
        style={({ isActive, isPending }) => {
          return {
            fontWeight: isActive ? "bold" : "",
            color: isPending ? "red" : "white",
          };
        }}
        className="series-bar"
      >
        SERIES
      </NavLink>
      <NavLink
        to="/search"
        style={({ isActive, isPending }) => {
          return {
            fontWeight: isActive ? "bold" : "",
            color: isPending ? "red" : "white",
          };
        }}
        className="search-bar"
      >
        SEARCH
      </NavLink>
    </div>
  );
}
