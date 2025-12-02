import Title from '../../../components/Title/Title';
import Description from '../../../components/Description/Description';
import ProjectsServicesCards from './ProjectsServicesCards';

const ProjectsServices = () => {
  return (
    <div className="projects-services">
      <Title>Services</Title>
      <Description>
        <p>I'm always looking for new opportunities! If you are hiring or interested in collaborating, feel free to reach out.</p>
      </Description>
      <ProjectsServicesCards />
      <hr />
    </div>
  );
};

export default ProjectsServices;
