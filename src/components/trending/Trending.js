import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import useFetch from "../../hooks/useFetch";
import { image_url, main_url } from "../url";

const Trending = () => {
  const [display, setDisplay] = useState([]);
  const [visible, setVisible] = useState(true);
  const TOP_URL =
    main_url +
    `/trending/movie/day?api_key=${process.env.REACT_APP_API_KEY}` +
    "&page=1";

  const { isLoading, serverError, apiData } = useFetch(TOP_URL);

  useEffect(() => {
    setDisplay(apiData.results ? apiData.results.slice(0, 8) : []);
  
  }, [isLoading]);

  return (
    <div className="column">
      <div className="home">
        <h1 className="text flex-1">Most Popular</h1>
        <h1 > <Link to="trending">See All</Link></h1>
      </div>

      <div div className="home">
        {display.map((item) => (
            <div className="container">
          <Link to={`/view/${item.id}`}>
              <img
                className="images"
                src={image_url + item.poster_path}
                alt=""
              />
            </Link>
            </div>
        ))}
      </div>
    </div>
  );
};

export default Trending;
