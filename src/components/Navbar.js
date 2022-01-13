import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { AiFillHome } from "react-icons/ai";
import { RiCompassDiscoverFill } from "react-icons/ri";
import { AiFillFire } from "react-icons/ai";
import { MdLocalMovies } from "react-icons/md";
import { BsSearch } from "react-icons/bs";
import { main_url, image_url } from "react";
import TopNav from "./TopNav";
const Navbar = () => {
  const [active, setActive] = useState(true);

  return (
    <div className="navbar">
      <nav className="home p-3">
        <ul className="flex flex-1 flex-row justify-center items-center ">
          <Link to="/">
            <li className>Home</li>
          </Link>
          <Link to="/top">
            <li>Top</li>
          </Link>
          <Link to="/trending">
            <li>Trending</li>
          </Link>
          <Link to="/genre">
            <li>Genre</li>
          </Link>
        </ul>
        <TopNav />
      </nav>
    </div>
  );
};

export default Navbar;
