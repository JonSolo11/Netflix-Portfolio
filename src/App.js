import React from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import HeroVideo from './components/HeroVideo';
import VideoCarousel from './components/Carousel';

function App() {
  const videos = [
    {
      id: 1,
      title: 'Video 1',
      thumbnail: '/thumbnails/2356-1.jpg',
      src: '/videos/KOTR_Description_Gameplay.mp4',
    },
    {
      id: 2,
      title: 'Video 2',
      thumbnail: '/thumbnails/welcome_to_the_world_of_pokemon__by_sergiart_d9iasyv-fullview.jpg',
      src: '/videos/another-video.mp4',
    },
    {
      id: 3,
      title: 'Video 3',
      thumbnail: '/thumbnails/youtube background.jpg',
      src: '/videos/yet-another-video.mp4',
    },
    {
      id: 4,
      title: 'Video 4',
      thumbnail: '/thumbnails/octopath-traveler-xbox-one.jpg',
      src: '/videos/yet-another-video.mp4',
    },
  ];

  return (
    <div style={{ backgroundColor: '#000', color: '#fff', fontFamily: 'Arial, sans-serif' }}>
      <Navbar />
      <div style={{ marginTop: '60px' }}>
        <HeroVideo />
        <VideoCarousel title="Trending Now" videos={videos} />
        <VideoCarousel title="New Releases" videos={videos} />
        <VideoCarousel title="Recommended for You" videos={videos} />
      </div>
      <Footer />
    </div>
  );
}

export default App;
