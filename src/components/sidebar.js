import React from "react";
import { FaPlus } from "react-icons/fa";
import { RiBookShelfLine } from "react-icons/ri";

export default function Sidebar() {
  return (
    <div className="sidebar-container h-[80%] w-[25%] bg-gray-950 rounded-md cursor-pointer mr-5 gap-4 mt-2 top-0 sticky">
      <div className="mb-16 font-semibold text-grey flex items-center  ">
        <RiBookShelfLine className="h-5 w-5 mr-7 items-center" />
        <h3 className="hover:text-slate-300">Your Library</h3>
        <FaPlus className="h-5 w-5 ml-52 hover:border" />
      </div>
      <div className="playlist-container bg-gray-900 p-6 rounded-lg shadow-md mb-7 mx-2">
        <h3 className="text-white font-bold text-lg">
          Create your first playlist
        </h3>
        <p>It's easy. We'll help you</p>
        <button className="mt-4 px-6 py-2 bg-white text-black font-semibold rounded-full cursor-pointer mb-2 transform hover:scale-110 transition duration-300">
          Create playlist
        </button>
      </div>
      <div className="podcast-container bg-gray-900 p-6 rounded-lg shadow-md mb-7 mx-2">
        <h3>Let's find some podcasts to follow</h3>
        <p>We'll keep you updated on new episodes</p>
        <button className="mt-4 px-6 py-2 bg-white font-semibold text-black rounded-full cursor-pointer mb-2 transform hover:scale-110 transition duration-300">
          Browse podcasts
        </button>
      </div>
    </div>
  );
}
