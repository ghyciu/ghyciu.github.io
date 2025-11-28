import BannerContentCard from './BannerContentCard';
import VShooterLogo from '../../../../../../assets/images/banner_card_vshooter.png';
import ChimeLogo from '../../../../../../assets/images/banner_card_chime.png';
import EchoLogo from '../../../../../../assets/images/banner_card_echo.png';

const BannerContentCards: React.FC = () => {
  const content = [
    {
      icon: VShooterLogo,
      title: 'VShooter',
      subtitle: '3D Top-Down Roguelike Shooter featuring VTubers',
      framework: 'Unity/C#',
      href: 'https://github.com/ghyciu/VShooter'
    },
    {
      icon: ChimeLogo,
      title: 'Chime',
      subtitle: 'Marketing & Business App for Philippine MSMEs',
      framework: 'Flutter/Dart/GCP',
      href: 'https://github.com/ghyciu/Chime'
    },
    {
      icon: EchoLogo,
      title: 'Echo',
      subtitle: 'Collaborative note&#8209;taking and deadline&#8209;tracking',
      framework: 'Flutter/Dart/Firebase',
      href: 'https://github.com/ghyciu/Echo'
    }
  ];

  return (
    <div className="banner-content-cards">
      {content.map((card, idx) => (
        <BannerContentCard key={idx} icon={card.icon} title={card.title} subtitle={card.subtitle} framework={card.framework} href={card.href} />
      ))}
    </div>
  );
};

export default BannerContentCards;
