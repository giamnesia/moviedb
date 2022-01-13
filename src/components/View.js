import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { image_url, main_url, orig_image } from "./url";
import useFetch from "../hooks/useFetch";
import Cast from "./Cast";
import Videos from "./Videos";
import GetKeyword from "./GetKeyword";
import CoverLoader from "../loader/CoverLoader";
const View = () => {
  const { id } = useParams();
  const [display, setDisplay] = useState([]);

  const VIEW_URL =
    main_url +
    `/movie/${id}?api_key=${process.env.REACT_APP_API_KEY}` +
    "&language=en-US";

  const { isLoading, serverError, apiData } = useFetch(VIEW_URL);
  useEffect(() => {
    setDisplay(apiData);
  }, [isLoading]);
  return (
    <div>
      <p style={{ display: "none" }}>
        {(document.title = "MovieDB | " + display.original_title)}
      </p>
      {isLoading ? (
        <CoverLoader />
      ) : (
        <div className="">
          <div className="">
            <img
              className="w-full h-full"
              src={
                display.backdrop_path
                  ? orig_image + display.backdrop_path
                  : "https://via.placeholder.com/1000x100"
              }
            />
            <img
              className="images"
              src={
                display.poster_path
                  ? image_url + display.poster_path
                  : "https://images.pexels.com/photos/3747139/pexels-photo-3747139.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
              }
              alt={display.original_title}
            />
          </div>

          {display.original_title}
          <i>{display.tagline ? `"${display.tagline}"` : []}</i>
          <p>{display.status}</p>
          <p>{display.runtime} minutes</p>
          <p>{display.release_date}</p>
          <p>{display.overview}</p>
          <p>{display.vote_average}</p>
          <div>
            {display.genres ? (
              display.genres.map((item) => (
                <Link to={`/genre/${item.id}/${item.name}`}>
                  <button className="button-ui">{item.name}</button>
                </Link>
              ))
            ) : (
              <p>No Genre</p>
            )}
          </div>
          <Cast id={display.id} />
          <Videos id={display.id} />
          <GetKeyword id={display.id} />
        </div>
      )}
    </div>
  );
};

export default View;
