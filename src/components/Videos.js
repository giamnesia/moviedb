import { useState, useEffect } from "react";
import { main_url } from "./url";
import useFetch from "../hooks/useFetch";
const Videos = ({ id }) => {
  const VID_URL =
    main_url +
    `/movie/${id}/videos?api_key=${process.env.REACT_APP_API_KEY}` +
    "&language=en-US";

  const [display, setDisplay] = useState([]);
  const { isLoading, serverError, apiData } = useFetch(VID_URL);

  useEffect(() => {
    setDisplay(apiData.results ? apiData.results.slice(0, 1) : []);
  }, [apiData]);

  return (
    <>
      <h1 className="text-center">Trailer</h1>

      <div className="flex items-center justify-center">
        {display.map((item) => (
          <iframe
            width="380"
            height="250"
            src={`https://www.youtube.com/embed/${item.key}`}
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
        ))}
      </div>
    </>
  );
};

export default Videos;
