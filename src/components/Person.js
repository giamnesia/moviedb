import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Known from "./Known";
import { image_url, main_url } from "./url";
const Person = () => {
  const { id } = useParams();

  const PERSON_URL =
    main_url +
    `/person/${id}?api_key=${process.env.REACT_APP_API_KEY}` +
    "&language=en-US";

  const [display, setDisplay] = useState([]);

  const Person = async () => {
    const response = await fetch(PERSON_URL);
    const data = await response.json();
    setDisplay(data);
  };

  useEffect(() => {
    Person();
  }, [id]);
  return (
    <div >
      <p style={{ display: "none" }}>
        {(document.title = "MovieDB | " + display.name)}
      </p>

      <div className='grid grid-cols-1 md:grid-cols-2   '>
      <div className='flex-center-col'>
      <img
        className="rounded-lg w-52 hover:opacity-60 transition ease-out"
        src={image_url + display.profile_path}
            alt={display.name}
            
          />

  
      </div>
      <div className='p-5'>
      <p className='text-2xl my-3 text-center md:text-left'>{display.name}</p>
      <p className='my-3 text-center md:text-left'>{display.gender == 1 ? "Female" : "Male"}</p>
      <p className='text-sm'>{display.biography ? display.biography : "No biography found"}</p>
      </div>
      </div>
     
    

      <Known id={display.id} />
    </div>
  );
};

export default Person;
