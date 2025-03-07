import React, { useState } from "react";
import Player from "../components/Players";
import { Artist } from "../Dummydata";

const PreviousNext = () => {
  const [currentArtistIndex, setCurrentArtistIndex] = useState(0);
  const [currentSongIndex, setCurrentSongIndex] = useState(0);

  const handleNext = () => {
    setCurrentSongIndex((prevIndex) => {
      const currentSongs = Artist[currentArtistIndex].songs;
      if (prevIndex + 1 < currentSongs.length) {
        return prevIndex + 1;
      } else {
        setCurrentArtistIndex((prevArtistIndex) => {
          const newArtistIndex =
            prevArtistIndex + 1 < Artist.length ? prevArtistIndex + 1 : 0;
          setCurrentSongIndex(0);
          return newArtistIndex;
        });
        return 0;
      }
    });
  };

  const handlePrevious = () => {
    setCurrentSongIndex((prevIndex) => {
      if (prevIndex - 1 >= 0) {
        return prevIndex - 1;
      } else {
        setCurrentArtistIndex((prevArtistIndex) => {
          const newArtistIndex =
            prevArtistIndex - 1 >= 0 ? prevArtistIndex - 1 : Artist.length - 1;
          setCurrentSongIndex(Artist[newArtistIndex].songs.length - 1);
          return newArtistIndex;
        });
        return 0;
      }
    });
  };

  return (
    <div>
      <Player
        currentSong={Artist[currentArtistIndex].songs[currentSongIndex]}
        onNext={handleNext}
        onPrevious={handlePrevious}
      />
    </div>
  );
};

export default PreviousNext;
