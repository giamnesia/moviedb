import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { main_url, image_url } from "./url";

import useFetch from "../hooks/useFetch";
const Np = () => {
  const [display, setDisplay] = useState([]);
  const [error, setError] = useState();
  const NP_URL =
    main_url +
    `/movie/now_playing?api_key=${process.env.REACT_APP_API_KEY}` +
    "&page=1";

  const { isLoading, serverError, apiData } = useFetch(NP_URL);

  useEffect(() => {
    console.log(apiData.results ? apiData.results.slice(0, 10) : [])
    setDisplay(apiData.results ? apiData.results.slice(0, 10) : []);
  }, [isLoading]);

  return (
    <div className='column'>
      <h1 className='text'>Now Playing </h1>
    <div className="home">
      {display.map((item) => (
        <div className="container">
          <Link to={`/view/${item.id}`}>
            <img className="images" src={image_url + item.poster_path} alt="" />
            <p className='text-small'>{item.title}</p>
            <p>{item.vote_average}</p>
          </Link>
        </div>
      ))}
      </div>
      </div>
  );
};

export default Np;
