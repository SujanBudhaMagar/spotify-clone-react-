import React from "react";
import Footer from "../components/footer";
import Sidebar from "../components/sidebar";
import Navbar from "../components/navbar";
import { useNavigate } from "react-router-dom";
import { MoreArtists } from "../Dummydata";

const ShowAll = () => {
  const navigate = useNavigate();
  return (
    <div className="spotify-clone ">
      <main className="main-content ">
        <div className="flex flex-wrap">
          <Navbar />
          <Sidebar />
          <div className="content-container bg-[#121212] rounded-md w-[73%] overflow-y-auto h-screen p-5">
            {/* Popular Artists */}
            <div className="popular-artists ">
              <div className="flex justify-between">
                <button className="text-lg font-bold mb-4 hover:text-gray-600">
                  Popular artists
                </button>
              </div>
              <div className="artist-list  gap-4">
                {MoreArtists.map((artist, index) => (
                  <div
                    key={index}
                    className="artist hover:border bg-[#222222] text-center"
                  >
                    <img
                      src={artist.img}
                      alt={artist.name}
                      className="h-18 w-18 rounded-md mx-auto"
                    />
                    <button
                      onClick={() => {
                        navigate(`/playlist/${artist.id}`); // Dynamically navigate using artist.id
                      }}
                    >
                      {artist.name}
                    </button>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default ShowAll;
