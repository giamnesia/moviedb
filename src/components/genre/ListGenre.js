import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import useFetch from "../../hooks/useFetch";
import { main_url } from "../url";
import ListImage from './ListImage'
import imagelist from "../../images/genreimg.js";
import AwesomeSlider from 'react-awesome-slider';


import { Swiper, SwiperSlide } from 'swiper/react/swiper-react'
import 'swiper/swiper.min.css'


const ListGenre = ({name}) => {
  const [display, setDisplay] = useState([]);
  const [image, setImage] = useState('');
  const LIST_URL =
    main_url + `/genre/movie/list?api_key=${process.env.REACT_APP_API_KEY}`;

  const { isLoading, serverError, apiData } = useFetch(LIST_URL);

  useEffect(() => {
    setDisplay(apiData.genres ? apiData.genres : [] );
    console.log(apiData)
    document.title = `MovieDB | Genres`;
  }, [isLoading]);
  
  return (
    <div className=''>
          <Swiper watchSlidesProgress={true}  breakpoints={{
          320: {
            width: 320,
            slidesPerView: 3,
          },
          640: {
          width: 640,
          slidesPerView: 4,
          },
          768: {
          width: 768,
          slidesPerView: 4,
          },
          }}>
        {display.map((item) => (
          <SwiperSlide className='bg-blue-500  p-5 break-words'>
          <Link to={`/genre/${item.id}/${item.name}`}>
            <p class=' h-24 flex-center-col md:border-2'>{item.name}</p>
          </Link>
            </SwiperSlide>
          ))}
      
        
      </Swiper>
      
    </div>
  );
};

export default ListGenre;
