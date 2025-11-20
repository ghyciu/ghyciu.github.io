interface BannerContentCardProps {
  title: string;
  subtitle?: string | '';
  framework?: string | '';
}

const BannerContentCard = (props: BannerContentCardProps) => {
  return (
    <div className="banner-content-card">
      <h2>{props.title}</h2>
      <h3>{props.subtitle}</h3>
      <h4>{props.framework}</h4>
    </div>
  );
};

export default BannerContentCard;
