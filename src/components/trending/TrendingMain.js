import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import useFetch from "../../hooks/useFetch";
import { image_url, main_url } from "../url";
import Loader from "../../loader/Loader";
const TrendingMain = () => {
  const [display, setDisplay] = useState([]);
  const [visible, setVisible] = useState(true);
  const TOP_URL =
    main_url +
    `/trending/movie/day?api_key=${process.env.REACT_APP_API_KEY}` +
    "&page=1";

  const { isLoading, apiData } = useFetch(TOP_URL);

  useEffect(() => {
    setDisplay(apiData.results ? apiData.results.slice(0, 20) : []);
    console.log(apiData.results);
  }, [isLoading]);
  return (
    <div className="column">
      <h1 className="text">Most Popular</h1>
      <div div className="home">
        {display.map((item) =>
          isLoading ? (
            <Loader />
          ) : (
            <div className="container">
              <Link to={`/view/${item.id}`}>
                <img
                  className="images"
                  src={image_url + item.poster_path}
                  alt=""
                />
              </Link>
            </div>
          )
        )}
      </div>
    </div>
  );
};

export default TrendingMain;
