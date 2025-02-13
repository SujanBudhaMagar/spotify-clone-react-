import React from "react";

import { useState, useRef } from "react";

const MusicPlayer = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef(new Audio("https://www.example.com/song.mp3")); // Replace with actual song URL

  const togglePlay = () => {
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  return (
    <div className="flex flex-col items-center gap-4 p-6">
      <h1 className="text-xl font-bold">Sushant KC - Bardali</h1>
      <button
        onClick={togglePlay}
        className="px-4 py-2 text-white bg-green-500 rounded-md hover:bg-green-600"
      >
        {isPlaying ? "Pause" : "Play"}
      </button>
    </div>
  );
};

export default MusicPlayer;
