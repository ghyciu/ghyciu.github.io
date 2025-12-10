import DiwataPortfolioImage from '../assets/images/design/diwata-portfolio.png';
import PlaceholderImage2 from '../assets/images/design/placeholder2.png';
import PlaceholderImage3 from '../assets/images/design/placeholder3.png';

export interface DesignDataElement {
  image: string;
}

const DesignData: DesignDataElement[] = [{ image: DiwataPortfolioImage }, { image: PlaceholderImage2 }, { image: PlaceholderImage3 }];

export default DesignData;
