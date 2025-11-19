const BannerHeader: React.FC = () => {
  return (
    <div className="banner-header">
      <nav className="banner-nav">
        <h2 className="banner-nav-item">
          <a href="/welcome" className="banner-nav-link">
            Welcome
          </a>
        </h2>
        <h2 className="banner-nav-item">
          <a href="/projects" className="banner-nav-link">
            Projects
          </a>
        </h2>
        <h2 className="banner-nav-item">
          <a href="/design" className="banner-nav-link">
            Design
          </a>
        </h2>
        <h2 className="banner-nav-item">
          <a href="/cosplay" className="banner-nav-link">
            Cosplay
          </a>
        </h2>
        <h2 className="banner-nav-item">
          <a href="/blog" className="banner-nav-link">
            Blog
          </a>
        </h2>
        <h2 className="banner-nav-item">
          <a href="/contact" className="banner-nav-link">
            Contact
          </a>
        </h2>
      </nav>
    </div>
  );
};

export default BannerHeader;
