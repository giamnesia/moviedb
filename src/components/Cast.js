import { useState, useEffect } from "react";
import useFetch from "../hooks/useFetch";
import { Link } from "react-router-dom";
import { main_url, image_url } from "./url";
const Cast = ({ id }) => {
  const VIEW_URL =
    main_url +
    `/movie/${id}/credits?api_key=${process.env.REACT_APP_API_KEY}` +
    "&language=en-US";
  const [display, setDisplay] = useState([]);
  const { isLoading, serverError, apiData } = useFetch(VIEW_URL);

  useEffect(() => {
    setDisplay(apiData.cast ? apiData.cast.splice(0, 18) : []);
  }, [apiData]);
  return (
    <div className='column'>
      {isLoading && <span>Loading.....</span>}
      {!isLoading && serverError ? (
        <span>Error in fetching data ...</span>
      ) : (
        <>
          <h1 className=" text">Casts</h1>
          <div className="home ">
            {display.map((item) => (
              <>
                {item.profile_path == null ? (
                  []
                ) : (
                  <div className="cast button-ui flex justify-center ">
                    
                  <Link to={`/person/${item.id}`}>
                      
                      <img className='rounded-md w-28 '
                        src={
                          item.profile_path != null
                            ? image_url + item.profile_path
                            : "https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/No-Image-Placeholder.svg/1200px-No-Image-Placeholder.svg.png"
                        }
                        alt=""
                      />
                      <div className='text-center p-3'>
                        <p className="">{item.name}</p>
                     </div>
                      </Link>
                    </div>
                )}
              </>
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default Cast;
