import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";

import { main_url, image_url } from "./url";
import Loader from "../loader/Loader.js";
const Search = () => {
  const [display, setDisplay] = useState([]);
  const [total, setTotal] = useState([]);
  const [results, setResults] = useState("");
  const [loading, setLoading] = useState(true);
  const { movie } = useParams();

  const SEARCH_URL =
    main_url +
    "/search/movie?" +
    `api_key=${process.env.REACT_APP_API_KEY}` +
    `&page=` +
    `&query=`;
  useEffect(() => {
    setLoading(true);
    fetch(SEARCH_URL + movie)
      .then((response) => response.json())
      .then((apiData) => {
        setTotal(apiData.total_results);
        setDisplay(apiData.results);
        setResults(movie);
        setLoading(false);
      });
  }, [movie]);
  return (
    <div>
      <p style={{ display: "none" }}>
        {(document.title = "MovieDB | " + movie)}
      </p>
      <div className="column">
        <p className="text">Results for: {results}</p>

        <div className="home">
          {display ? (
            display.map((item) =>
              loading ? (
                <Loader />
              ) : (
                <div className="bg-white rounded-2xl  w-36 h-52 m-2">
                  <Link to={`/view/${item.id}`}>
                    <img
                      className="w-36 h-52 rounded-2xl "
                      src={
                        item.poster_path
                          ? image_url + item.poster_path
                          : "https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/No-Image-Placeholder.svg/1200px-No-Image-Placeholder.svg.png"
                      }
                      alt={item.title}
                    />
                  </Link>
                </div>
              )
            )
          ) : (
            <h1>No data</h1>
          )}
        </div>
      </div>
    </div>
  );
};

export default Search;
