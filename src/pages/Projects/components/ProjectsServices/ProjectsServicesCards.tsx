import { ServicesData, ServicesDataElement } from '../../../../data/services';
import ProjectServicesCard from './ProjectsServicesCard';
import React, { useEffect, useRef, useState } from 'react';

const ProjectsServicesCards = () => {
  const services: ServicesDataElement[] = ServicesData;
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
    <div className={`projects-services-cards ${visible ? ' float-in-up' : ''}`} ref={cardsRef}>
      {services.map((service: ServicesDataElement, idx: number) => (
        <ProjectServicesCard key={idx} title={service.title} frameworks={service.frameworks} icon_classname={service.icon_classname} />
      ))}
    </div>
  );
};

export default ProjectsServicesCards;
