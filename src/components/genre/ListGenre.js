import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import useFetch from "../../hooks/useFetch";
import { main_url } from "../url";
import ListImage from './ListImage'
import imagelist from "../../images/genreimg.js";

const ListGenre = ({name}) => {
  const [display, setDisplay] = useState([]);
  const [image, setImage] = useState('');
  const LIST_URL =
    main_url + `/genre/movie/list?api_key=${process.env.REACT_APP_API_KEY}`;

  const { isLoading, serverError, apiData } = useFetch(LIST_URL);

  useEffect(() => {
    setDisplay(apiData.genres ? apiData.genres : []);
  
    document.title = `MovieDB | Genres`;
  }, [isLoading]);
  return (
    <div className="flex flex-row flex-wrap m-3 items-center justify-center">
     
      
      {
        imagelist.map(item => (
          <>
            <img src={item.url} className='w-52' alt="" />
            </>
        ))
      }
      {display.map((item) => (
        <Link to={`/genre/${item.id}/${item.name}`}>
          <div className="bg-white m-3 w-52 h-12 text-black text-center">
            <p>{item.name}</p>
           
          </div>
          </Link>
        
      ))}
    
    </div>
  );
};

export default ListGenre;
