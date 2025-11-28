interface ProjectsCardProps {
  image: string;
  title: string;
  framework: string;
}

const ProjectsCard = ({ image, title, framework }: ProjectsCardProps) => {
  return (
    <div className="home-projects-card">
      <img src={image} />
      <div className="home-projects-card-metadata">
        <div className="home-projects-card-framework">{framework}</div>
        <div className="home-projects-card-title">{title}</div>
      </div>
    </div>
  );
};

export default ProjectsCard;
