import './Projects.css';

import Title from '../../components/Title/Title';
import Description from '../../components/Description/Description';

const Projects: React.FC = () => {
  return (
    <div className="projects-root">
      <div className="projects-projects">
        <Title>Projects</Title>
        <hr />
      </div>
      <div className="projects-techstack">
        <Title>Tech Stack</Title>
        <img src="https://skillicons.dev/icons?i=js,ts,nodejs,react,nextjs,tailwind,vuejs,vite,cs,cpp,java,rust,swift,dart,flutter,godot,unity,arduino,latex,matlab,opencv,mongodb,firebase,aws,gcp,docker,kubernetes&perline=8" />
        <hr />
      </div>
      <div className="projects-services">
        <Title>Services</Title>
        <Description>
          <p>I'm always looking for new opportunities! If you are hiring or interested in collaborating, feel free to reach out.</p>
        </Description>
        <hr />
      </div>
    </div>
  );
};

export default Projects;
