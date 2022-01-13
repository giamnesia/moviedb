import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { image_url, main_url } from "./url";
import useFetch from "../hooks/useFetch";
const Known = ({ id }) => {
  const KNOWN_URL =
    main_url +
    `/person/${id}/movie_credits?api_key=${process.env.REACT_APP_API_KEY}` +
    "&language=en-US";

  const [display, setDisplay] = useState([]);
  const { isLoading, serverError, apiData } = useFetch(KNOWN_URL);

  useEffect(() => {
    setDisplay(apiData.cast ? apiData.cast.slice(0, 16) : []);
  }, [apiData]);
  return (
    <div className="column">
      <h1 className="text">Known for</h1>
      <div className="home">
        {display.map((item) => (
          <div className="container">
            <Link to={`/view/${item.id}`}>
              <img
                className="images"
                src={
                  item.poster_path
                    ? image_url + item.poster_path
                    : "https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/No-Image-Placeholder.svg/1200px-No-Image-Placeholder.svg.png"
                }
                alt=""
              />
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Known;
