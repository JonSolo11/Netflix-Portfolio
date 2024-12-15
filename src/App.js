import React, { useRef } from "react";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import HeroVideo from "./components/HeroVideo";
import VideoCarousel from "./components/VideoCarousel";
import VideoPlayer from "./components/VideoPlayer";

import videosData from "./components/videos.json";

function AppContent() {
  const heroVideoRef = useRef(null);
  const location = useLocation();

  // Determine if the navbar should be hidden
  const shouldHideNavbar = location.pathname === "/player";

  return (
    <div>
      {/* Pass hideNavbar prop to Navbar */}
      <Navbar hideNavbar={shouldHideNavbar} />
      <Routes>
        <Route
          path="/"
          element={
            <div>
              <HeroVideo ref={heroVideoRef} />
              {videosData.carousels.map((carousel, index) => (
                <div key={index} style={index === 0 ? { marginTop: "-200px" } : {}}>
                  <VideoCarousel
                    title={carousel.title}
                    videos={carousel.videos}
                    heroVideoRef={heroVideoRef}
                  />
                </div>
              ))}
              {!shouldHideNavbar && <Footer />} {/* Hide Footer if navbar is hidden */}
            </div>
          }
        />
        <Route path="/player" element={<VideoPlayer />} />
      </Routes>
    </div>
  );
}

function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}

export default App;
