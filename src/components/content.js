import sushkc from "../assets/sushkc.png";
import prit from "../assets/prit.png";
import john from "../assets/john.png";
import purna from "../assets/purna.png";
import tribal from "../assets/tribalrain.png";
import srv from "../assets/srv.png";
import roka from "../assets/roka.png";
import bar from "../assets/bar.png";
import dha from "../assets/dha.png";
import hit from "../assets/hit.png";
import die from "../assets/die.png";
import maya from "../assets/maya.png";

import React from "react";
import Sidebar from "./sidebar";
import Navbar from "./navbar";
import Footer from "./footer";
import { useNavigate } from "react-router-dom";

const Content = () => {
  const navigate = useNavigate();
  return (
    <div className="spotify-clone ">
      <main className="main-content ">
        <div className="flex flex-wrap">
          <Navbar />
          <Sidebar />
          <div className="content-container bg-gray-950 rounded-md mt-2 w-[73%] overflow-x-hidden h-screen">
            {/* Popular Artists */}
            <div className="popular-artists ">
              <div className="flex justify-between">
                <button className="text-lg font-bold mb-4 hover:text-gray-600">
                  Popular artists
                </button>
                <button className=" hover:text-slate-400 ml-96">
                  Show all
                </button>
              </div>
              <div className="artist-list grid grid-cols-3 gap-4">
                {[
                  { id: 1, name: "Sushant KC", img: sushkc },
                  { id: 2, name: "Pritam", img: prit },
                  { id: 3, name: "John Rai", img: john },
                  { id: 4, name: "Purna Rai", img: purna },
                  { id: 5, name: "Tribal Rain", img: tribal },
                  { id: 6, name: "Sajjan Raj Vaidya", img: srv },
                ].map((artist, index) => (
                  <div key={index} className="artist text-center">
                    <img
                      src={artist.img}
                      alt={artist.name}
                      className="h-18 w-18 rounded-md mx-auto"
                    />
                    <button
                      onClick={() => {
                        navigate("/playlist/:id");
                      }}
                    >
                      {artist.name}
                    </button>
                  </div>
                ))}
              </div>
            </div>

            {/* Popular Albums */}
            <div className="popular-albums mt-8">
              <div className="flex justify-between">
                <button className="text-lg font-bold mb-4 hover:text-gray-600  ">
                  Popular albums and singles
                </button>
                <button className=" hover:text-slate-400 ">Show All</button>
              </div>

              <div className="album-list grid grid-cols-2 gap-4">
                {[
                  {
                    title: "Roka Yo Samay",
                    artist: "Tribal Rain",
                    img: roka,
                  },
                  {
                    title: "Maya Ma (2018 Compilation)",
                    artist: "Sushant KC",
                    img: maya,
                  },
                  {
                    title: "HIT ME HARD AND SOFT",
                    artist: "Billie Eilish",
                    img: hit,
                  },
                  {
                    title: "Die With A Smile",
                    artist: "Lady Gaga, Bruno Mars",
                    img: die,
                  },
                  {
                    title: "Dhanyavaad",
                    artist: "Sabin Rai & The Pharaoh",
                    img: dha,
                  },
                  {
                    title: "Bimbaakash",
                    artist: "Bartika Eam Rai",
                    img: bar,
                  },
                ].map((album, index) => (
                  <div
                    key={index}
                    className="album p-4 bg-gray-800 rounded-md shadow-md"
                  >
                    <img
                      src={album.img}
                      alt={album.name}
                      className="h-18 w-18 rounded-md"
                    />
                    <p>{album.artist}</p>
                    <p>{album.title}</p>
                  </div>
                ))}
              </div>
              <div className="popular-albums mt-8">
                <div className="flex justify-between">
                  <button className="text-lg font-bold mb-4 hover:text-gray-600  ">
                    Popular albums and singles
                  </button>
                  <button className="items-right hover:text-slate-400 ">
                    Show All
                  </button>
                </div>

                <div className="album-list grid grid-cols-2 gap-4">
                  {[
                    {
                      title: "Roka Yo Samay",
                      artist: "Tribal Rain",
                      img: roka,
                    },
                    {
                      title: "Maya Ma (2018 Compilation)",
                      artist: "Sushant KC",
                      img: maya,
                    },
                    {
                      title: "HIT ME HARD AND SOFT",
                      artist: "Billie Eilish",
                      img: hit,
                    },
                    {
                      title: "Die With A Smile",
                      artist: "Lady Gaga, Bruno Mars",
                      img: die,
                    },
                    {
                      title: "Dhanyavaad",
                      artist: "Sabin Rai & The Pharaoh",
                      img: dha,
                    },
                    {
                      title: "Bimbaakash",
                      artist: "Bartika Eam Rai",
                      img: bar,
                    },
                  ].map((album, index) => (
                    <div
                      key={index}
                      className="album p-4 bg-gray-800 rounded-md shadow-md"
                    >
                      <img
                        src={album.img}
                        alt={album.name}
                        className="h-18 w-18 rounded-md"
                      />
                      <p>{album.artist}</p>
                      <p>{album.title}</p>
                    </div>
                  ))}
                </div>
              </div>
              <div className="popular-albums mt-8">
                <div className="flex justify-between">
                  <button className="text-lg font-bold mb-4 hover:text-gray-600  ">
                    Popular albums and singles
                  </button>
                  <button className="items-right hover:text-slate-400 ">
                    Show All
                  </button>
                </div>

                <div className="album-list grid grid-cols-2 gap-4">
                  {[
                    {
                      title: "Roka Yo Samay",
                      artist: "Tribal Rain",
                      img: roka,
                    },
                    {
                      title: "Maya Ma (2018 Compilation)",
                      artist: "Sushant KC",
                      img: maya,
                    },
                    {
                      title: "HIT ME HARD AND SOFT",
                      artist: "Billie Eilish",
                      img: hit,
                    },
                    {
                      title: "Die With A Smile",
                      artist: "Lady Gaga, Bruno Mars",
                      img: die,
                    },
                    {
                      title: "Dhanyavaad",
                      artist: "Sabin Rai & The Pharaoh",
                      img: dha,
                    },
                    {
                      title: "Bimbaakash",
                      artist: "Bartika Eam Rai",
                      img: bar,
                    },
                  ].map((album, index) => (
                    <div
                      key={index}
                      className="album p-4 bg-gray-800 rounded-md shadow-md"
                    >
                      <img
                        src={album.img}
                        alt={album.name}
                        className="h-18 w-18 rounded-md"
                      />
                      <p>{album.artist}</p>
                      <p>{album.title}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Content;
