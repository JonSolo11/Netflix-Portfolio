import React from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import HeroVideo from './components/HeroVideo';
import VideoCarousel from './components/VideoCarousel';


const videos = [
  {
    id: 1,
    title: 'Video 1',
    thumbnail: '/thumbnails/2356-1.jpg',
    src: '/GAMEDEMO.mp4',
  },
  {
    id: 2,
    title: 'Video 2',
    thumbnail: '/thumbnails/welcome_to_the_world_of_pokemon__by_sergiart_d9iasyv-fullview.jpg',
    src: '/GAMEDEMO.mp4',
  },
  {
    id: 3,
    title: 'Video 3',
    thumbnail: '/thumbnails/youtube background.jpg',
    src: '/GAMEDEMO.mp4',
  },
  {
    id: 4,
    title: 'Video 4',
    thumbnail: '/thumbnails/octopath-traveler-xbox-one.jpg',
    src: '/GAMEDEMO.mp4',
  },
];

function App() {
  return (
    <div>
      <Navbar />
      <HeroVideo />
      {/* Overlapping carousel */}
      <div style={{ marginTop: '-200px' }}>
        <VideoCarousel title="Trending Now" videos={videos} zindex/>
      </div>
      <div>
        <VideoCarousel title="New Releases" videos={videos} />
        <VideoCarousel title="Recommended for You" videos={videos} />
      </div>
      <Footer />
    </div>
  );
}

export default App;
