import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import useFetch from "../hooks/useFetch";
import { image_url, main_url } from "./url";
import { AiFillStar } from "react-icons/ai";
const Top = () => {
  const [display, setDisplay] = useState([]);

  const TOP_URL =
    main_url +
    `/movie/top_rated?api_key=${process.env.REACT_APP_API_KEY}` +
    "&page=1";

  const { isLoading, serverError, apiData } = useFetch(TOP_URL);

  useEffect(() => {
    setDisplay(apiData.results ? apiData.results.slice(0, 20) : []);
    console.log(apiData.results);
    document.title = "MovieDB | Top Rated";
  }, [isLoading]);

  return (
    <div className="column">
      <h1 className="text">Top Rated</h1>
      <div className="home">
        {isLoading ? (
          <p>Loading</p>
        ) : (
          display.map((item) => (
            <div class="container">
              <Link exact to={`/view/${item.id}`}>
                <img
                  className="images"
                  src={image_url + item.poster_path}
                  alt=""
                />
              </Link>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default Top;
