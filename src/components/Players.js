import { GrCaretPrevious } from "react-icons/gr";
import { GrCaretNext } from "react-icons/gr";
import { FaRegPauseCircle } from "react-icons/fa";
import { CiVolume } from "react-icons/ci";
import { Artists } from "../Dummydata";

const Players = ({ currentSong }) => {
  return (
    <footer className="p-4 bg-[#222222] text-white w-full fixed bottom-0 h-[10%] flex items-center justify-center">
      <div className="flex items-center justify-between w-full ">
        {currentSong && (
          <div className="flex items-center justify-center">
            <img
              src={currentSong.img}
              alt={currentSong.name}
              className="h-12 w-12 rounded-md mx-auto"
            />
            <>
              <p>{currentSong.title}</p>
              <p>{Artists.name}</p>
            </>
          </div>
        )}
        <div className="flex flex-col items-center">
          <div className="flex">
            <GrCaretPrevious className="h-8 w-8" />
            <FaRegPauseCircle className="h-8 w-8" />
            <GrCaretNext className="h-8 w-8" />
          </div>
          <div className="flex items-center gap-5">
            <p>1:06</p>
            <div className="w-[60vw] max-w-[500px] bg-gray-300 rounded-full cursor-pointer">
              <hr className="h-1 border-none  bg-green-800 rounded-full w-[30%]"></hr>
            </div>
            {currentSong && (
              <div>{currentSong && <p>{currentSong.duration}</p>}</div>
            )}
          </div>
        </div>
        <>
          {/* Volume Control */}
          <div className="flex items-center gap-2">
            <CiVolume className="h-6 w-6 cursor-pointer" />
            <input
              type="range"
              min="0"
              max="100"
              className="w-20 cursor-pointer"
            />
          </div>
        </>
      </div>
    </footer>
  );
};

export default Players;
