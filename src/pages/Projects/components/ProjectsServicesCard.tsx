interface ProjectServicesCardProps {
  title: string;
}

const ProjectServicesCard = ({ title }: ProjectServicesCardProps) => {
  return <div className="project-services-card">{title}</div>;
};

export default ProjectServicesCard;
