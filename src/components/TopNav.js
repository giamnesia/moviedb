import React from "react";
import { useState, useEffect } from "react";
import { BsSearch } from "react-icons/bs";
import { Link } from "react-router-dom";
import { main_url, image_url } from "react";
import Search from "./Search";
const TopNav = () => {
  const [search, setSearch] = useState("");
  const [page, setPage] = useState(1);
  const [display, setDisplay] = useState([]);
  const SEARCH_URL =
    main_url +
    "/search/movie?" +
    `api_key=${process.env.REACT_APP_API_KEY}` +
    `&page=${page}` +
    `&query=`;
  const handleInput = (e) => {
    setSearch(e.target.value);
  };
  const handleSearch = async (e) => {
    e.preventDefault();
    fetch(SEARCH_URL + search)
      .then((res) => res.json())
      .then((data) => {
        setDisplay(data.results);
      });
  };

  return (
    <div>
      <form onSubmit={handleSearch}>
        <input
          className="outline-none p-2 border-none rounded-md text-sm text-black"
          type="text"
          value={search}
          onChange={handleInput}
          placeholder="Search Movies"
        />
        <Link to={search ? `/search/${search}` : "/"}>
          <button type="submit" className="relative right-8 text-indigo-500">
            <BsSearch />
          </button>
        </Link>
      </form>
    </div>
  );
};

export default TopNav;
