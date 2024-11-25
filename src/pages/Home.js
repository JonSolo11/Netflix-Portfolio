import React from 'react';
import HeroBanner from '../components/HeroBanner';
import Carousel from '../components/Carousel';

const projects = [
  { id: 1, title: 'Web App', description: 'A powerful web app.', image: '/images/web_app.jpg' },
  { id: 2, title: 'Game', description: 'A fun game project.', image: '/images/game_project.jpg' },
  { id: 3, title: 'API', description: 'A fast API service.', image: '/images/api_service.jpg' },
  { id: 4, title: 'Portfolio', description: 'A stunning portfolio.', image: '/images/portfolio.jpg' },
];

function Home() {
  return (
    <div>
      <HeroBanner />
      <Carousel title="Web Apps" projects={projects} />
      <Carousel title="Game Projects" projects={projects} />
      <Carousel title="APIs and Services" projects={projects} />
    </div>
  );
}

export default Home;
