import BannerHeaderLink from './BannerHeaderLink';

const BannerHeader: React.FC = () => {
  return (
    <div className="banner-header">
      <nav className="banner-nav">
        <BannerHeaderLink label="Welcome" href="/welcome" />
        <BannerHeaderLink label="Projects" href="/projects" />
        <BannerHeaderLink label="Design" href="/design" />
        <BannerHeaderLink label="Cosplay" href="/cosplay" />
        <BannerHeaderLink label="Blog" href="/blog" />
        <BannerHeaderLink label="Contact" href="/contact" />
      </nav>
    </div>
  );
};

export default BannerHeader;
