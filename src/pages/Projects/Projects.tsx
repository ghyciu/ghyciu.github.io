import './Projects.css';

import Title from '../../components/Title/Title';
import ProjectsServices from './components/ProjectsServices/ProjectsServices';
import ProjectsTechstack from './components/ProjectsTechstack/ProjectsTechstack';

const Projects: React.FC = () => {
  return (
    <div className="projects-root">
      <div className="projects-projects">
        <Title>Projects</Title>
        <hr />
      </div>
      <ProjectsTechstack />
      <ProjectsServices />
    </div>
  );
};

export default Projects;
