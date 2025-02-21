import React, { useState } from "react";
import Players from "../components/Players";
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
        // Move to the next artist if available, else loop back to first artist
        setCurrentArtistIndex((prevArtistIndex) => {
          const newArtistIndex =
            prevArtistIndex + 1 < Artist.length ? prevArtistIndex + 1 : 0;

          // Ensure the first song is played when switching artists
          setCurrentSongIndex(0);

          return newArtistIndex;
        });

        return 0; // Reset song index
      }
    });
  };

  const handlePrevious = () => {
    setCurrentSongIndex((prevIndex) => {
      if (prevIndex - 1 >= 0) {
        return prevIndex - 1;
      } else {
        // Move to the previous artist if available, else loop to last artist
        setCurrentArtistIndex((prevArtistIndex) => {
          const newArtistIndex =
            prevArtistIndex - 1 >= 0 ? prevArtistIndex - 1 : Artist.length - 1;

          // Ensure we get the last song of the new artist
          setCurrentSongIndex(Artist[newArtistIndex].songs.length - 1);

          return newArtistIndex;
        });

        return 0; // This will be overridden by `setCurrentSongIndex` in the artist switch
      }
    });
  };

  return (
    <div>
      <Players
        currentSong={Artist[currentArtistIndex].songs[currentSongIndex]}
        onNext={handleNext}
        onPrevious={handlePrevious}
      />
    </div>
  );
};

export default PreviousNext;
