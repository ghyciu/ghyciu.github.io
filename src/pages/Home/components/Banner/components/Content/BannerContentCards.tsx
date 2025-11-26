import BannerContentCard from './BannerContentCard';
import VShooterLogo from '../../../../../../assets/images/banner_card_vshooter.png';
import ChimeLogo from '../../../../../../assets/images/banner_card_chime.png';
import EchoLogo from '../../../../../../assets/images/banner_card_echo.png';

const BannerContentCards: React.FC = () => {
  return (
    <div className="banner-content-cards">
      <BannerContentCard icon={VShooterLogo} title="VShooter" subtitle="3D Top-Down Roguelike Shooter featuring VTubers" framework="Unity/C#" href="https://github.com/ghyciu/VShooter" />
      <BannerContentCard icon={ChimeLogo} title="Chime" subtitle="Marketing & Business App for Philippine MSMEs" framework="Flutter/Dart/AWS" href="https://github.com/ghyciu/Chime" />
      <BannerContentCard icon={EchoLogo} title="Echo" subtitle="Collaborative note&#8209;taking and deadline&#8209;tracking" framework="Flutter/Dart/GCP" href="https://github.com/ghyciu/Echo" />
    </div>
  );
};

export default BannerContentCards;
