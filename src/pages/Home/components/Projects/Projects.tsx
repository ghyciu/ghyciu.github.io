import './Projects.css';

import Title from '../../../../components/Title/Title';
import Description from '../../../../components/Description/Description';
import ProjectsCards from '../../../../components/ProjectsCards/ProjectsCards';
import SectionLink from '../../../../components/SectionLink/SectionLink';

const Projects = () => {
  return (
    <div className="home-projects">
      <Title>Projects</Title>
      <Description>
        <p>
          In my spare time, I like to work on small passion projects both to develop my skills and to have fun. Each project reflects my commitment to creating efficient, user-friendly, and innovative
          solutions. Oh, and I guess this website also counts too.
        </p>
      </Description>
      <ProjectsCards limit={5} />
      <SectionLink label="Explore my projects" href="/projects" />
      <hr />
    </div>
  );
};

export default Projects;
