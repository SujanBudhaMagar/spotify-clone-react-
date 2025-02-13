import { useParams } from "react-router-dom";
import { FaCheckCircle, FaPlay } from "react-icons/fa";
import { MdBorderHorizontal } from "react-icons/md";
import FirstCard from "../cards/FirstCard";
import { Img, Songs } from "../Dummydata";
import Navbar from "./navbar";
import Sidebar from "./sidebar";

const Playlist = () => {
  const { id } = useParams(); // Get artist ID from URL

  // Find artist details based on ID
  const artist = Img.find((artist) => artist.id.toString() === id);

  if (!artist) {
    return <h1 className="text-white">Artist Not Found</h1>;
  }

  return (
    <div className="spotify-clone">
      <main className="main-content">
        <div className="flex flex-wrap">
          <Navbar />
          <Sidebar />
          <div className="bg-black text-white min-h-screen p-4 w-[70%]">
            {/* Header Section */}
            <div
              className="relative w-full h-80 bg-cover bg-center rounded-lg overflow-hidden"
              style={{
                backgroundImage: `url(${artist.img})`, // Dynamically setting background
              }}
            >
              <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-end p-6">
                <div className="flex items-center gap-2">
                  <FaCheckCircle className="text-blue-400 text-xl" />
                  <span className="text-sm">Verified Artist</span>
                </div>
                <FirstCard name={artist.name} listeners={artist.listeners} />
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
                {Songs.map((song, index) => (
                  <div
                    key={index}
                    className="flex items-center justify-between p-2 bg-gray-800 rounded-lg hover:bg-gray-700 transition"
                  >
                    <div className="flex items-center gap-4">
                      <span className="text-gray-400 text-lg">{index + 1}</span>
                      <img
                        src={`/${song.img}`}
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
      </main>
    </div>
  );
};

export default Playlist;
