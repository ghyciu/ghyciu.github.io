import LogoWhiteIcon from '../../../../../../assets/icons/logo_white.png';

const BannerHeaderLogo: React.FC = () => {
  return (
    <a href="/">
      <div className="banner-logo">
        <img src={LogoWhiteIcon} alt="Banner Logo" />
      </div>
    </a>
  );
};

export default BannerHeaderLogo;
