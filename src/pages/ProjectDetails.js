import React from 'react';
import { useParams } from 'react-router-dom';

function ProjectDetails() {
  const { id } = useParams();

  // Mock data for demonstration
  const project = {
    id,
    title: 'Project Title',
    description: 'Detailed description of the project goes here.',
    technologies: ['React', 'Node.js', 'CSS'],
    image: '/images/web_app.jpg',
  };

  return (
    <div style={{ padding: '20px', color: '#fff' }}>
      <h1>{project.title}</h1>
      <img src={project.image} alt={project.title} style={{ width: '100%', margin: '20px 0' }} />
      <p>{project.description}</p>
      <h3>Technologies Used:</h3>
      <ul>
        {project.technologies.map((tech, index) => (
          <li key={index}>{tech}</li>
        ))}
      </ul>
    </div>
  );
}

export default ProjectDetails;
