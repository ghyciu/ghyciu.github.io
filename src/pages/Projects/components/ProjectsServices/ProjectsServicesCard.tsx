interface ProjectsServicesCardProps {
  title: string;
  frameworks?: string | undefined;
  icon_classname?: string | undefined;
}

const ProjectsServicesCard = ({ title, frameworks, icon_classname }: ProjectsServicesCardProps) => {
  return (
    <div className="projects-services-card">
      {icon_classname && <i className={`fi ${icon_classname}`}></i>}
      <div>
        <div className="projects-services-card-title">{title}</div>
        {frameworks && <div className="projects-services-card-frameworks">{frameworks}</div>}
      </div>
    </div>
  );
};

export default ProjectsServicesCard;
