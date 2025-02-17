import { useParams } from "react-router-dom";
import { FaCheckCircle, FaPlay } from "react-icons/fa";
import { MdBorderHorizontal } from "react-icons/md";
import FirstCard from "../cards/FirstCard";
import { useEffect, useState } from "react";
import { Artist } from "../Dummydata";
import Navbar from "../components/navbar";
import Sidebar from "../components/sidebar";
import Players from "../components/Players";

const Playlist = () => {
  const { id } = useParams(); // Get the 'id' from the URL
  const [artistData, setArtistData] = useState();
  const [currentSong, setCurrentSong] = useState(null);

  const handleSongClick = (song) => {
    setCurrentSong(song);
  };
  useEffect(() => {
    console.log("Artist ID from URL:", id); // Check if the ID is being captured

    // Find the artist by matching the ID
    const selectedArtist = Artist.find(
      (artist) => artist.id.toString() === id // Compare string values to ensure correct match
    );

    if (selectedArtist) {
      setArtistData(selectedArtist); // Set the artist data if found
    } else {
      console.log("Artist not found for ID:", id); // Log when no artist is found
    }
  }, [id]); // The effect runs when 'id' changes (e.g., when navigating to a new artist)

  // Render loading or error state if artistData is not yet loaded
  if (!artistData) {
    return <h1 className="text-white">Artist Not Found</h1>;
  }

  return (
    <div className="spotify-clone">
      <main className="main-content">
        <div className="flex flex-wrap  w-full">
          <Navbar />
          <Sidebar />
          <div className=" bg-gray-950 rounded-md mt-2 w-[73%] overflow-y-auto h-screen">
            {/* Header Section */}
            <div
              className="relative w-full h-80 bg-cover bg-center rounded-lg "
              style={{
                backgroundImage: `url(${artistData.img})`, // Dynamically setting background
              }}
            >
              <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-end p-6">
                <div className="flex items-center gap-2">
                  <FaCheckCircle className="text-blue-400 text-xl" />
                  <span className="text-sm">Verified Artist</span>
                </div>
                <FirstCard
                  name={artistData.name}
                  listeners={artistData.listeners}
                />
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex items-center gap-4 mt-6">
              <button className="bg-green-500 text-black px-6 py-2 rounded-full text-lg font-semibold flex items-center gap-2">
                <FaPlay size={20} /> Play
              </button>
              <button className="border border-gray-500 px-6 py-2 rounded-full text-lg">
                Follow
              </button>
              <MdBorderHorizontal size={24} className="cursor-pointer" />
            </div>

            {/* Popular Songs */}
            <div className="mt-6">
              <h2 className="text-2xl font-bold">Popular Songs</h2>
              <div className="mt-4 space-y-4">
                {artistData.songs?.map((song, index) => (
                  <div
                    key={index}
                    className="flex items-center justify-between p-2 bg-gray-800 rounded-lg hover:bg-gray-700 transition"
                    onClick={() => handleSongClick(artistData.songs[index])}
                  >
                    <div className="flex items-center gap-4">
                      <span className="text-gray-400 text-lg">{index + 1}</span>
                      <img
                        src={`${song.img}`}
                        alt={song.title}
                        className="w-12 h-12 rounded-md"
                      />
                      <div>
                        <p className="text-white font-semibold">{song.title}</p>
                        <p className="text-gray-400 text-sm">
                          {song.plays} plays
                        </p>
                      </div>
                    </div>
                    <p className="text-gray-400">{song.duration}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
        {currentSong && <Players currentSong={currentSong} />}
      </main>
    </div>
  );
};

export default Playlist;
