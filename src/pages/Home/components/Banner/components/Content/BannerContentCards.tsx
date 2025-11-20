import BannerContentCard from './BannerContentCard';

const BannerContentCards: React.FC = () => {
  return (
    <div className="banner-content-cards">
      <BannerContentCard title="VShooter" subtitle="Top-down 3D roguelike Shooter" framework="Unity/C#" />
      <BannerContentCard title="Chime" subtitle="Marketing & business app for Philippine MSMEs" framework="Flutter/Dart/AWS" />
      <BannerContentCard title="Echo" subtitle="Collaborative note&#8209;taking and deadline&#8209;tracking" framework="Flutter/Dart/GCP" />
    </div>
  );
};

export default BannerContentCards;
