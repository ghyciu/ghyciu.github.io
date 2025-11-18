import BannerCosplayImage from '../../../../../assets/images/banner_cosplay.png';
import './BannerCosplay.css';

const BannerCosplay: React.FC = () => {
  return (
    <div className="banner-cosplay">
      <img className="banner-cosplay-img" src={BannerCosplayImage} alt="Banner Cosplay" />
    </div>
  );
};

export default BannerCosplay;
