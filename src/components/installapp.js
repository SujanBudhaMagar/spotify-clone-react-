import React, { useEffect, useState } from "react";
import Navbar from "./navbar";
import Sidebar from "./sidebar";
import Footer from "./footer";
const InstallApp = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const isHashed = localStorage.getItem("token");
    if (isHashed) {
      setIsLoggedIn(true);
    }
  }, []);
  return (
    <>
      <div className="spotify-clone">
        <main className="main-content ">
          <div className="flex flex-wrap">
            <Navbar />
            <Sidebar />
            <div>
              <div className="mt-10 w-[70%] bg-gradient-to-r from-gray-800 to-gray-900 p-6 rounded-lg shadow-lg">
                <h2 className="text-3xl font-semibold mb-4">
                  Download Spotify for Windows
                </h2>
                <p className="text-gray-300 mb-6">
                  Enjoy high-quality audio and offline playback, plus Windows
                  Game Bar integration and a friend activity feed.
                </p>
              </div>
            </div>
          </div>
        </main>
        {!isLoggedIn ? <Footer /> : null}
      </div>
    </>
  );
};

export default InstallApp;
