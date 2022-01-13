import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import useFetch from "../../hooks/useFetch";
import { image_url, main_url } from "../url";
import Spinner from "../../loader/Spinner";
const Genre = () => {
  const [display, setDisplay] = useState([]);
  const { name , genrename } = useParams();
 

  const GENRE_URL =
    main_url +
    `/discover/movie?api_key=${process.env.REACT_APP_API_KEY}` +
    `&with_genres=${name}`;

  const { isLoading, apiData } = useFetch(GENRE_URL);

  useEffect(() => {
    
    setDisplay(apiData.results ? apiData.results.slice(0, 20) : []);
    document.title = `MovieDB | ${genrename}`;
  }, [isLoading]);

  return (
    <div className='column'>
      <p className="text-center">{genrename}</p>
      {isLoading ? (
        <Spinner/>
      )
        : (
        <div className="home">
        {display.map((item) =>
        <div className="container">
            <Link to={`/view/${item.id}`}>
              <img className='images' src={image_url + item.poster_path} alt={item.title} />
            </Link>
          </div>
        )}
        </div>
        )
      }
    </div>
  );
};

export default Genre;
