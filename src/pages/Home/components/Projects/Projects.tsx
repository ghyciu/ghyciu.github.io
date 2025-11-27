import './Projects.css';

import Title from '../../../../components/Title/Title';
import Description from '../../../../components/Description/Description';

const Projects = () => {
  return (
    <div className="home-projects">
      <Title>Projects</Title>
      <Description>
        <p>
          In my spare time, I like to work on small passion projects both to develop my skills and to have fun. Each project reflects my commitment to creating efficient, user-friendly, and innovative
          solutions.
        </p>
      </Description>
    </div>
  );
};

export default Projects;
