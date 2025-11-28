import ProjectsCard from './ProjectsCard';

import VShooter1 from '../../../../../assets/images/projects/projects_vshooter_1.png';

const ProjectsCards = () => {
  const projects = [
    {
      image: VShooter1,
      title: 'VShooter',
      framework: 'Unity, C#'
    }
  ];

  return (
    <div className="home-projects-cards">
      {projects.map((project, idx) => (
        <ProjectsCard key={idx} image={project.image} title={project.title} framework={project.framework} />
      ))}
    </div>
  );
};

export default ProjectsCards;
