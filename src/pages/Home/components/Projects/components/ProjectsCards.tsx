import ProjectsCard from './ProjectsCard';
import { ProjectsCardProps } from './ProjectsCard';

import VShooter1 from '../../../../../assets/images/projects/projects_vshooter_1.png';
import VShooter2 from '../../../../../assets/images/projects/projects_vshooter_2.png';
import VShooter3 from '../../../../../assets/images/projects/projects_vshooter_3.png';
import VShooter4 from '../../../../../assets/images/projects/projects_vshooter_4.png';

import Chime1 from '../../../../../assets/images/projects/projects_chime_1.png';
import Chime2 from '../../../../../assets/images/projects/projects_chime_2.png';
import Chime3 from '../../../../../assets/images/projects/projects_chime_3.png';
import Chime4 from '../../../../../assets/images/projects/projects_chime_4.png';

import Echo1 from '../../../../../assets/images/projects/projects_echo_1.png';

const ProjectsCards = () => {
  const projects: ProjectsCardProps[] = [
    {
      images: [VShooter1, VShooter2, VShooter3, VShooter4],
      title: 'VShooter',
      framework: 'Unity, C#',
      description: '3D Top-Down Roguelike Shooter featuring VTubers',
      href: 'https://github.com/ghyciu/VShooter'
    },
    {
      images: [Chime1, Chime2, Chime3, Chime4],
      title: 'Chime',
      framework: 'Flutter, Dart, GCP',
      description: 'Marketing and Business App for Philippine MSMEs',
      href: 'https://github.com/ghyciu/Chime'
    },
    {
      images: [Echo1],
      title: 'Echo',
      framework: 'Flutter, Dart, Firebase',
      description: 'Collaborative note-taking and deadline tracking mobile app',
      href: 'https://github.com/ghyciu/Echo'
    }
  ];

  return (
    <div className="home-projects-cards">
      {projects.map((project, idx) => (
        <ProjectsCard key={idx} images={project.images} title={project.title} framework={project.framework} description={project.description} href={project.href} />
      ))}
    </div>
  );
};

export default ProjectsCards;
