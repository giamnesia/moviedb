import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import useFetch from "../hooks/useFetch";
import Loader from '../loader/Loader'
const Keyword = ({ id }) => {
  const [display, setDisplay] = useState([]);
  const MAIN = "https://api.themoviedb.org/3";
  const URL =
    MAIN +
    `/discover/movie?api_key=${process.env.REACT_APP_API_KEY}` +
    `&with_keywords=${id}&language=en-US`;
  const IMG_URL = "https://image.tmdb.org/t/p/w300";

  const { isLoading, serverError, apiData } = useFetch(URL);
  useEffect(() => {
    setDisplay(apiData.results ? apiData.results.slice(0, 14) : []);
  }, [isLoading]);
  return (
    <div className='column'>
    <h1 className='text'>Similar Movies</h1>
      <div className="home">
     
        {display.map((item) => (
            isLoading? (
            <Loader/>
          ) : (
            <div className="container">
              <Link to={`/view/${item.id}`}>
              <img
                className="images"
                src={IMG_URL + item.poster_path}
                alt={item.title}
              />
                </Link>
             </div>
                
            )
      ))}
      </div>
      </div>
  );
};

export default Keyword;
