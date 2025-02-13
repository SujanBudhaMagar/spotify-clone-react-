// App.js
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LogIn from "./components/login";
import Signup from "./components/signup";
import InstallApp from "./components/installapp";
import Content from "./components/content";

import "./index.css";
import Playlist from "./components/Playlist";
import MusicPlayer from "./cards/Playsongs";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Content />} />
          <Route path="/install" element={<InstallApp />} />
          <Route path="/playlist/:id" element={<Playlist />} />
          <Route path="/player" element={<MusicPlayer />} />

          <Route path="/login" element={<LogIn />} />
          <Route path="/signup" element={<Signup />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
