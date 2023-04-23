import React, { memo, useState } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import {
  fetchasyncMovies,
  fetchasyncShows,
} from "../../features/movies/movieSlice";
import user from "../../images/user.png";
import "./Header.scss";

const Header = memo(() => {
  const dispatch = useDispatch();
  const [term, setTerm] = useState("");

  const submitHandler = (e) => {
    e.preventDefault();
    if (term === "") return alert("Please enter search term");
    dispatch(fetchasyncMovies(term));
    dispatch(fetchasyncShows(term));
    setTerm("");
  };

  return (
    <div className="header">
      <div className="logo">
        <Link to="/">Movie Library</Link>
      </div>
      <div className="search-bar">
        <form onSubmit={submitHandler}>
          <input
            type="text"
            value={term}
            placeholder="Search Movies or Shows"
            onChange={(e) => setTerm(e.target.value)}
          />
          <button type="submit">
            <i className="fa fa-search" />
          </button>
        </form>
      </div>
      <div className="user-image">
        <img src={user} alt="user" />
      </div>
    </div>
  );
});

export default Header;
