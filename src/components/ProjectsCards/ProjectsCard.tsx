import React, { useState, useRef } from 'react';
import { ProjectsDataElement } from '../../data/projects';

const ProjectsCard = ({ images, title, framework, description, href }: ProjectsDataElement) => {
  const [isHovered, setIsHovered] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const handleMouseEnter = () => {
    if (images.length > 1) {
      setIsHovered(true);
      setCurrentIndex(1);
      intervalRef.current = setInterval(() => {
        setCurrentIndex(prevIndex => {
          const nextIndex = prevIndex + 1;
          if (nextIndex >= images.length) {
            return 1;
          }
          return nextIndex;
        });
      }, 1500);
    }
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    setCurrentIndex(0);
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }
  };

  const displayedImage = isHovered && images.length > 1 ? images[currentIndex] : images[0];

  return (
    <div className="projects-card" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
      <a href={href} target="_blank" rel="noopener noreferrer">
        <img src={displayedImage} alt={title} />
        <div className="projects-card-metadata">
          <div className="projects-card-framework">{framework}</div>
          <div className="projects-card-title">{title}</div>
          <div className="projects-card-description">{description}</div>
        </div>
      </a>
    </div>
  );
};

export default ProjectsCard;
