import Title from '../../../../components/Title/Title';
import Description from '../../../../components/Description/Description';
import ProjectsServicesCards from './ProjectsServicesCards';

import Button from '../../../../components/Button/Button';
import { useNavigate } from 'react-router';

const ProjectsServices = () => {
  const navigate = useNavigate();

  const handleContactClick = () => {
    navigate('/contact');
  };

  return (
    <div className="projects-services">
      <Title>Services</Title>
      <Description>
        <p>I'm always looking for new opportunities! If you are hiring or interested in collaborating, feel free to reach out.</p>
      </Description>
      <ProjectsServicesCards />
      <Button label="Contact" onClick={handleContactClick} className="projects-services-button" />
      <hr />
    </div>
  );
};

export default ProjectsServices;
