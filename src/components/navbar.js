import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaSearch } from "react-icons/fa";
import { IoMdHome } from "react-icons/io";
import { MdDownloadForOffline } from "react-icons/md";
import { Link } from "react-router-dom";

export default function Navbar() {
  const navigate = useNavigate();
  const [activeButton, setActiveButton] = useState("");
  const handleButtonClick = (buttonName) => {
    setActiveButton(buttonName);
  };
  return (
    <header className="header sticky top-0 h-[8%] w-full ">
      <img
        src="https://upload.wikimedia.org/wikipedia/commons/2/26/Spotify_logo_with_text.svg"
        alt="Spotify Logo"
        className="w-28 mb-4 "
      />
      <IoMdHome
        className="items-center h-15 w-15"
        onClick={() => {
          navigate("/");
        }}
      />
      <div className="flex items-center justify-center px-4 py-2 w-full max-w-md mr-44 bg-black rounded-full">
        <FaSearch className="text-white h-5 w-5 ml-2" />
        <input
          type="text"
          className="bg-black text-white placeholder-gray-400 outline-none ml-2 flex-grow"
          placeholder="What do you want to play?"
        />
      </div>
      <div className="header-buttons flex gap-[1rem] justify-center items-center">
        <MdDownloadForOffline className="pl-4 pr-7 ml-10  bg-black transform hover:scale-110 transition duration-300 " />
        <Link
          to="/install"
          className={`hover:text-slate-300 ${
            activeButton === "installapp" ? "active" : ""
          }`}
          onClick={() => handleButtonClick("install app")}
        >
          Install App
        </Link>
        <Link
          to="/signup"
          className={`hover:text-slate-300 `}
          onClick={() => handleButtonClick("signup")}
        >
          Sign up
        </Link>
        <Link
          to="/login"
          className={`rounded-full bg-white text-black hover:bg-slate-300 px-4 py-2 ${
            activeButton === "login" ? "active" : ""
          }`}
          onClick={() => handleButtonClick("login")}
        >
          Log in
        </Link>
      </div>
    </header>
  );
}
