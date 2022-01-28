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

      <div className=' '>
      <div className='flex-center-col m-5'>
      <img
        className="card-img"
        src={image_url + display.profile_path}
            alt={display.name}
            
          />

  
      </div>
      <center className='p-5'>
      <center className='text-2xl my-3'>{display.name}</center>
      <p className='my-3 '>{display.gender == 1 ? "Female" : "Male"}</p>
      <p className='text-sm m-2'>{display.biography ? display.biography : "No biography found"}</p>
      </center>
      </div>
     
    

      <Known id={display.id} />
    </div>
  );
};

export default Person;
