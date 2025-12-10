import ProjectsCard from './ProjectsCard';
import ProjectsData from '../../data/projects';
import { ProjectsDataElement } from '../../data/projects';
import './ProjectsCards.css';

import React, { useEffect, useRef, useState } from 'react';

interface ProjectsCardsProps {
  limit?: number;
}

const ProjectsCards = ({ limit }: ProjectsCardsProps) => {
  let projects: ProjectsDataElement[] = ProjectsData;
  if (typeof limit === 'number') {
    projects = projects.slice(0, limit);
  }

  const [visible, setVisible] = useState(false);
  const cardsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new window.IntersectionObserver(
      entries => {
        const entry = entries[0];
        if (entry && entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );
    if (cardsRef.current) {
      observer.observe(cardsRef.current);
    }
    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <div ref={cardsRef} className={`projects-cards${visible ? ' float-in-up' : ''}`}>
      {projects.map((project, idx) => (
        <ProjectsCard key={idx} images={project.images} title={project.title} framework={project.framework} description={project.description} href={project.href} />
      ))}
    </div>
  );
};

export default ProjectsCards;
