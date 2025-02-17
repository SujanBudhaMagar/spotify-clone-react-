// App.js
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import InstallApp from "./components/installapp";

import "./index.css";
import Playlist from "./pages/Playlist";
import Signup from "./pages/signup";
import LogIn from "./pages/login";
import Content from "./pages/content";
import ShowAll from "./pages/showall";
import Players from "./components/Players";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Content />} />
          <Route path="/install" element={<InstallApp />} />
          <Route path="/playlist/:id" element={<Playlist />} />
          <Route path="/showall" element={<ShowAll />} />
          <Route path="/login" element={<LogIn />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/player" element={<Players />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
