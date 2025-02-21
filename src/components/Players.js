import React, { useState, useEffect, useRef } from "react";
import { GrCaretPrevious, GrCaretNext } from "react-icons/gr";
import { FaRegPauseCircle, FaPlayCircle } from "react-icons/fa";
import { CiVolume } from "react-icons/ci";
import { Artist } from "../Dummydata";

const Players = ({ currentSong, onNext, onPrevious }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const audioRef = useRef(new Audio()); // Use single persistent Audio instance

  const artist = Artist.find((artist) => artist.id === currentSong?.artistId);

  useEffect(() => {
    if (currentSong) {
      audioRef.current.src = currentSong.audio; // Change song source
      audioRef.current.load(); // Reload new source
      setCurrentTime(0);
      setIsPlaying(true);
      audioRef.current.play();

      const updateTime = () => {
        setCurrentTime(audioRef.current.currentTime);
      };

      audioRef.current.addEventListener("timeupdate", updateTime);
      audioRef.current.addEventListener("ended", () => {
        setIsPlaying(false);
        onNext(); // Automatically move to the next song when the current one ends
      });

      return () => {
        audioRef.current.removeEventListener("timeupdate", updateTime);
        audioRef.current.removeEventListener("ended", onNext);
      };
    }
  }, [currentSong, onNext]);

  const handlePlayPause = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  const formatTime = (time) => {
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes}:${seconds < 10 ? "0" : ""}${seconds}`;
  };

  return (
    <footer className="p-4 bg-[#222222] text-white w-full fixed bottom-0 h-[10%] flex items-center justify-center">
      <div className="flex items-center justify-between w-full">
        {currentSong && (
          <div className="flex items-center justify-center">
            <img
              src={currentSong.img}
              alt={currentSong.title}
              className="h-12 w-12 rounded-md mx-auto"
            />
            <div className="flex flex-col items-center ml-2">
              <p>{currentSong.title}</p>
              <p>{artist ? artist.name : "Unknown Artist"}</p>
            </div>
          </div>
        )}
        <div className="flex flex-col items-center">
          <div className="flex">
            <GrCaretPrevious
              className="h-8 w-8 cursor-pointer"
              onClick={() => {
                onPrevious();
                setIsPlaying(false); // Ensure playback stops when switching
              }}
            />
            <div onClick={handlePlayPause}>
              {isPlaying ? (
                <FaRegPauseCircle className="h-8 w-8 cursor-pointer" />
              ) : (
                <FaPlayCircle className="h-8 w-8 cursor-pointer" />
              )}
            </div>
            <GrCaretNext
              className="h-8 w-8 cursor-pointer"
              onClick={() => {
                onNext();
                setIsPlaying(false);
              }}
            />
          </div>
          <div className="flex items-center gap-5">
            <p>{formatTime(currentTime)}</p>
            <div className="w-[60vw] max-w-[500px] bg-gray-300 rounded-full cursor-pointer">
              <hr
                className="h-1 border-none bg-green-800 rounded-full"
                style={{
                  width: `${
                    (currentTime / (audioRef.current?.duration || 1)) * 100
                  }%`,
                }}
              />
            </div>
            {currentSong && (
              <div>
                <p>{formatTime(audioRef.current?.duration || 0)}</p>
              </div>
            )}
          </div>
        </div>

        {/* Volume Control */}
        <div className="flex items-center gap-2">
          <CiVolume className="h-6 w-6 cursor-pointer" />
          <input
            type="range"
            min="0"
            max="100"
            className="w-20 cursor-pointer"
            onChange={(e) => {
              if (audioRef.current) {
                audioRef.current.volume = e.target.value / 100;
              }
            }}
          />
        </div>
      </div>
    </footer>
  );
};

export default Players;
