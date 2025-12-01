import Title from '../../../components/Title/Title';
import Description from '../../../components/Description/Description';
import { ServicesData, ServicesDataElement } from '../../../data/services';
import ProjectServicesCard from './ProjectServicesCard';

const ProjectsServices = () => {
  const services: ServicesDataElement[] = ServicesData;

  return (
    <div className="projects-services">
      <Title>Services</Title>
      <Description>
        <p>I'm always looking for new opportunities! If you are hiring or interested in collaborating, feel free to reach out.</p>
      </Description>
      {services.map((service: ServicesDataElement, idx: number) => (
        <ProjectServicesCard key={idx} title={service.title} />
      ))}
      <hr />
    </div>
  );
};

export default ProjectsServices;
